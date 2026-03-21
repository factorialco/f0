export const shaderSource = `
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

vec2 rotateAround(vec2 point, vec2 center, float angle) {
  vec2 local = point - center;
  local = rot(angle) * local;
  return local + center;
}

vec3 orbPalette(float t) {
  float wA = exp(-18.0 * pow(t - 0.1, 2.0));
  float wB = exp(-16.0 * pow(t - 0.35, 2.0));
  float wC = exp(-16.0 * pow(t - 0.62, 2.0));
  float wD = exp(-18.0 * pow(t - 0.86, 2.0));
  float sum = max(wA + wB + wC + wD, 0.0001);
  return (uColorA * wA + uColorB * wB + uColorC * wC + uColorD * wD) / sum;
}

float luma(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

vec3 boostSaturation(vec3 color, float amount) {
  float gray = luma(color);
  return mix(vec3(gray), color, amount);
}

float stateWeight(float center) {
  return exp(-5.0 * pow(uStatePhase - center, 2.0));
}

float orbField(vec2 p, float t, float warp, float microSpeed) {
  vec2 q = p;
  q += 0.05 * vec2(
    sin((q.y + 0.1) * 7.0 + t * 0.85),
    cos((q.x - 0.07) * 6.5 - t * 0.72)
  );

  q = rotateAround(q, vec2(-0.15, 0.16), t * (0.55 + 0.3 * warp));
  q = rotateAround(q, vec2(0.18, -0.08), -t * (0.78 + 0.22 * warp));
  q = rotateAround(q, vec2(-0.02, -0.2), t * (0.36 + 0.18 * warp));

  vec2 q2 = rotateAround(q, vec2(0.07, 0.05), -t * (0.44 + 0.16 * warp));
  vec2 q3 = rotateAround(q, vec2(-0.08, 0.02), t * (0.62 + 0.1 * warp));

  float flow1 = sin((q.x * 7.2 + q.y * 4.4) * (0.9 + warp) + t * 1.12);
  float flow2 = sin((q2.x * 3.0 - q2.y * 8.8) * (1.1 + 0.8 * warp) - t * 0.96);
  float flow3 = cos((q3.x * 11.8 + q3.y * 2.1) * (0.65 + 0.5 * warp) + t * 1.42);
  float flow4 = sin(length(q2 * vec2(1.15, 0.9)) * 15.0 - t * (0.9 + 0.55 * warp));

  // Fast micro-turbulence for more alive movement.
  float jitter = sin((q.x * 18.0 + q.y * 14.0) + t * microSpeed);
  float sparkle = cos((q.x * 22.0 - q.y * 16.0) - t * (microSpeed * 1.08));
  float noise = hash(q * 14.0 + t * 0.07) - 0.5;

  return
    0.5 +
    0.2 * flow1 +
    0.16 * flow2 +
    0.13 * flow3 +
    0.12 * flow4 +
    0.04 * jitter +
    0.03 * sparkle +
    0.06 * noise;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  vec2 p = uv - 0.5;
  p.x *= iResolution.x / iResolution.y;

  float radius = length(p);
  float orbRadius = 0.46;
  float orbMask = 1.0 - smoothstep(orbRadius, orbRadius + 0.008, radius);

  if (orbMask <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float speaking = stateWeight(3.0);
  float listening = stateWeight(1.0);
  float thinking = stateWeight(2.0);

  float t = iTime * (0.13 + uSpeed * 0.1 + speaking * 0.11 + thinking * 0.05);
  float warp =
    0.22 +
    0.58 * uComplexity +
    speaking * 0.2 +
    thinking * 0.16 -
    listening * 0.1;
  float microSpeed = 6.0 + uSpeed * 2.5 + speaking * 7.0 + thinking * 3.5;

  float field0 = orbField(p, t, warp, microSpeed);
  float field1 = orbField(p + vec2(0.008, 0.0), t, warp, microSpeed);
  float field2 = orbField(p + vec2(-0.008, 0.0), t, warp, microSpeed);
  float field3 = orbField(p + vec2(0.0, 0.008), t, warp, microSpeed);
  float field4 = orbField(p + vec2(0.0, -0.008), t, warp, microSpeed);

  // 5-tap diffusion smooths hard gaps and creates a more liquid spread.
  float field = (field0 * 0.4 + (field1 + field2 + field3 + field4) * 0.15);
  field = smoothstep(-0.02, 0.93, field);
  field = 0.12 + field * 0.82;

  float radialShift = 0.5 + 0.5 * sin(t * 0.16 + p.x * 2.0 - p.y * 1.6);
  float paletteT = clamp(field * 0.8 + radialShift * 0.2, 0.0, 1.0);

  vec3 color = orbPalette(paletteT);

  float lighting = smoothstep(orbRadius, 0.0, radius);
  vec2 lightPos = vec2(-0.14, 0.22);
  float specular = exp(-24.0 * pow(length(p - lightPos), 2.0));
  float rim = smoothstep(orbRadius, orbRadius - 0.06, radius);
  vec3 warmTint = normalize(uColorA + uColorB + vec3(0.001));
  vec3 coolTint = normalize(uColorC + uColorD + vec3(0.001));
  vec3 diffTint = normalize(mix(warmTint, coolTint, 0.48));

  float diffusion = 0.32 + uIntensity * 0.3 + listening * 0.08;
  color *= 0.78 + lighting * (0.44 + diffusion * 0.22);
  color += mix(coolTint, warmTint, 0.35) * rim * 0.2;
  color += diffTint * specular * 0.08;
  color += diffTint * (1.0 - smoothstep(0.18, orbRadius, radius)) * diffusion * 0.18;

  float pulse =
    0.88 +
    uIntensity * 0.48 +
    speaking * 0.08 +
    listening * 0.03 +
    thinking * 0.06;
  color *= pulse;

  // Gentle tonemap to avoid clip without the washed-out "filter" look.
  color = color / (1.0 + color * 0.16);
  color = boostSaturation(color, 1.14);
  color = pow(clamp(color, 0.0, 1.0), vec3(0.95));

  float alpha = orbMask;
  fragColor = vec4(clamp(color, 0.0, 1.0), alpha);
}`
