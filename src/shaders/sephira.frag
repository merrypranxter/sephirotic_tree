#version 300 es
precision mediump float;
out vec4 outColor;
uniform vec3 color;
void main() {
  // Soft edges for circular sephira drawn with points
  float dist = length(gl_PointCoord.xy - vec2(0.5));
  float alpha = smoothstep(0.5, 0.45, dist);
  outColor = vec4(color, alpha);
}
