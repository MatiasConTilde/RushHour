#pragma strict

var right : KeyCode;
var left  : KeyCode;
var up  : KeyCode;
var down  : KeyCode;
var destination : int;

function Update () {

if(Globales.carriedObject == gameObject){
  
  if(Input.GetKeyDown(left)){
  	rigidbody.position.x= rigidbody.position.x-6;
  }
  if(Input.GetKeyDown(right)){
  	rigidbody.position.x= rigidbody.position.x+6;
  }
  if(Input.GetKeyDown(up)){
  	rigidbody.position.z= rigidbody.position.z+6;
  }
  if(Input.GetKeyDown(down)){
  	rigidbody.position.z= rigidbody.position.z-6;
  }
  
  if (Mathf.Abs(rigidbody.position.x - destination)<0.01){
  	rigidbody.position.x=destination;
  }
 }
  
}