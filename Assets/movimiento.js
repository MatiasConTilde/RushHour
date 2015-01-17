#pragma strict

var right : KeyCode;
var left  : KeyCode;
var up  : KeyCode;
var down  : KeyCode;
var destination : int;

var inc : float = 6;

function Update () {
inc = 1;

if(Globales.carriedObject == gameObject){
  
  if(Input.GetKeyDown(left)){
  	rigidbody.position.x= rigidbody.position.x-inc;
  }
  if(Input.GetKeyDown(right)){
  	rigidbody.position.x= rigidbody.position.x+inc;
  }
  if(Input.GetKeyDown(up)){
  	rigidbody.position.z= rigidbody.position.z+inc;
  }
  if(Input.GetKeyDown(down)){
  	rigidbody.position.z= rigidbody.position.z-inc;
  }
  
  if (Mathf.Abs(rigidbody.position.x - destination)<0.01){
  	rigidbody.position.x=destination;
  }
 }
  
}