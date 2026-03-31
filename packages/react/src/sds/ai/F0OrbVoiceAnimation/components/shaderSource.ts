export const shaderSource = `
// ─── morphic gradient orb ─────────────────────────────────────────────────────
//
// Colours: colorC (lavender) → colorB (pink) → colorA (peach)
//
// Visual layers (back → front):
//   1. Domain-warped colour anchors  — non-linear morphing blobs
//   2. Ghost 4th anchor that pulses in/out — unexpected colour bursts
//   3. Turbulent sine interference   — swirling brightness modulation
//   4. Fast iridescent rings
//   5. Soft diffuse + Fresnel edge lift
//   6. Rim + audio glow + idle desaturation

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  vec2 p  = uv - 0.5;
  p.x    *= iResolution.x / iResolution.y;

  float orbR = 0.46;
  vec2  pn   = p / orbR;
  float r2   = dot(pn, pn);

  if (r2 > 1.0) {
    fragColor = vec4(0.0);
    return;
  }

  // ── View-space sphere normal ──────────────────────────────────────────────
  float nz = sqrt(max(0.0, 1.0 - r2));
  vec3  N  = vec3(pn, nz);

  // ── Fast compound rotation → rN (object-space) ───────────────────────────
  float t  = iTime * uSpeed * 0.30;
  float cy = cos(t * 0.71), sy = sin(t * 0.71);
  float cx = cos(t * 0.53), sx = sin(t * 0.53);
  float rx = N.x * cy + N.z * sy;
  float rz = -N.x * sy + N.z * cy;
  vec3  rN = vec3(rx, N.y * cx - rz * sx, N.y * sx + rz * cx);

  // ── Domain warp ──────────────────────────────────────────────────────────
  // Twist the colour-lookup space with layered sines before computing anchor
  // distances. This breaks the blobs out of smooth circular shapes into
  // irregular morphing regions — gradients become non-linear and organic.
  float tw = t * 0.85;
  vec2 warp1 = vec2(
    sin(rN.y * 4.5 + tw * 1.20) * 0.22 + sin(rN.x * 3.1 - tw * 0.75) * 0.14,
    cos(rN.x * 3.8 + tw * 1.05) * 0.19 + cos(rN.y * 2.7 + tw * 1.50) * 0.13
  );
  // Second warp pass (fbm-style, but only 2 octaves in colour-space — not geometry)
  vec2 warp2 = vec2(
    sin(rN.y * 8.3 + warp1.x * 3.0 + tw * 0.60) * 0.09,
    cos(rN.x * 7.6 + warp1.y * 3.0 - tw * 0.55) * 0.08
  );
  vec2 cN = rN.xy + warp1 + warp2; // warped coords used for colour lookup only

  // ── 3 drifting colour anchors ─────────────────────────────────────────────
  vec2 anchorC = vec2(sin(t * 0.83)        * 0.80, cos(t * 0.67)        * 0.75);
  vec2 anchorB = vec2(sin(t * 0.57 + 2.10) * 0.75, cos(t * 0.43 + 1.40) * 0.80);
  vec2 anchorA = vec2(sin(t * 0.71 + 4.30) * 0.78, cos(t * 0.91 + 0.80) * 0.70);

  float dC = length(cN - anchorC);
  float dB = length(cN - anchorB);
  float dA = length(cN - anchorA);

  // Falloff softness breathes over time — sometimes blobs blend softly,
  // sometimes they pop with a sharper edge.
  float softness = 0.07 + sin(t * 0.37) * 0.04 + sin(t * 0.61) * 0.02;

  float wC = 1.0 / (dC * dC + softness);
  float wB = 1.0 / (dB * dB + softness);
  float wA = 1.0 / (dA * dA + softness);

  // ── Ghost 4th anchor (pulses in and out) ──────────────────────────────────
  // Alternates between a lavender echo and a pink echo, creating unexpected
  // pockets of colour that swell up and then melt back into the blend.
  float ghostLife = sin(t * 0.29) * 0.5 + 0.5;             // 0→1 slow pulse
  vec2  anchorG   = vec2(sin(t * 0.47 + 1.57) * 0.60, cos(t * 0.38 + 3.14) * 0.65);
  float dG        = length(cN - anchorG);
  float wG        = (1.0 / (dG * dG + softness)) * ghostLife * 0.70;
  // Ghost colour shifts between colorC and colorA over time
  vec3  colorG    = mix(uColorC, uColorA, sin(t * 0.19) * 0.5 + 0.5);

  float wSum = wC + wB + wA + wG;
  vec3 col = (uColorC * wC + uColorB * wB + uColorA * wA + colorG * wG) / wSum;

  // ── Turbulent sine interference ───────────────────────────────────────────
  float w1 = sin(rN.x * 6.5 + rN.y * 2.8 + t * 1.80) * 0.5 + 0.5;
  float w2 = sin(rN.x * 4.1 - rN.y * 5.7 + t * 1.30) * 0.5 + 0.5;
  float w3 = sin(rN.x * 2.9 + rN.y * 7.1 - t * 1.10) * 0.5 + 0.5;
  float waves = w1 * 0.45 + w2 * 0.35 + w3 * 0.20;

  col = mix(col, col * (0.82 + waves * 0.28), N.z * 0.75);

  // ── Drifting highlight blobs ──────────────────────────────────────────────
  vec2  h1Focal = vec2(sin(t * 0.73) * 0.42, cos(t * 0.61) * 0.36);
  float h1Dist  = length(rN.xy - h1Focal);
  float h1Mask  = (1.0 - smoothstep(0.0, 0.52, h1Dist)) * smoothstep(0.15, 0.42, N.z);
  col = mix(col, mix(col, vec3(1.0, 0.97, 1.0), 0.10), h1Mask * h1Mask);

  vec2  h2Focal = vec2(sin(t * 0.51 + 1.80) * 0.35, cos(t * 0.44 + 0.90) * 0.44);
  float h2Dist  = length(rN.xy - h2Focal);
  float h2Mask  = (1.0 - smoothstep(0.0, 0.44, h2Dist)) * smoothstep(0.15, 0.42, N.z);
  col = mix(col, mix(col, vec3(1.0, 0.95, 0.97), 0.07), h2Mask * h2Mask);



  // ── Soft diffuse + Fresnel edge lift ──────────────────────────────────────
  vec3  L    = normalize(vec3(-0.22, 0.52, 1.0));
  vec3  V    = vec3(0.0, 0.0, 1.0);
  float diff = max(dot(N, L), 0.0);
  col  = col * (0.68 + diff * 0.38);
  float fresnel = pow(1.0 - dot(N, V), 2.5);
  col += vec3(1.0, 0.94, 0.96) * fresnel * 0.10;

  // ── Rim ───────────────────────────────────────────────────────────────────
  float rim = pow(1.0 - N.z, 4.0);
  col += mix(uColorC, uColorB, 0.5) * 0.07 * rim;

  // ── Audio glow ────────────────────────────────────────────────────────────
  float glow = exp(-length(p) * 5.0);
  col += uColorB * 0.18 * glow * uIntensity;

  // ── Idle: desaturate + dim ────────────────────────────────────────────────
  float idle = clamp(1.0 - uStatePhase, 0.0, 1.0);
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(luma) * 0.72, idle * 0.52);

  // ── Soft edge mask ────────────────────────────────────────────────────────
  float mask = 1.0 - smoothstep(0.88, 1.0, r2);

  // ── Tonemap + gamma ───────────────────────────────────────────────────────
  col = col / (1.0 + col * 0.08);
  col = pow(clamp(col, 0.0, 1.0), vec3(0.90));

  fragColor = vec4(col * mask, mask);
}
`
