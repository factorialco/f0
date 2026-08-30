//#region src/kits/ai/F0AiMask/gl/shaders/vertex.ts
var e = "#version 300 es\n\nin vec2 aPosition;\nin vec2 aUV;\nout vec2 vUV;\nvoid main() {\n	vUV = aUV;\n	gl_Position = vec4(aPosition, 0.0, 1.0);\n}\n";
//#endregion
export { e as default };
