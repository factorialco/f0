declare const _default: "#version 300 es\n\nin vec2 aPosition;\nin vec2 aUV;\nout vec2 vUV;\nvoid main() {\n\tvUV = aUV;\n\tgl_Position = vec4(aPosition, 0.0, 1.0);\n}\n";
export default _default;
