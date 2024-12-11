uniform sampler2D uTexture;


varying vec2 vUv;
varying vec3 vPosition;


float PI = 3.141592653589793238;


void main()	{
  vec4 img = texture2D(uTexture,vUv);
	gl_FragColor = img;
}