#pragma strict

var right : KeyCode;
var left : KeyCode;

function Start () {

}

function Update () {

// si soy yo el cubo seleccionado ...
// me muevo


// esto funciona ...
//Debug.Log(gameObject.name);

if(Globales.carriedObject == gameObject){
  // Debug.Log("Hola, soy " + Globales);
  
  
  if (Input.GetKey (left)){

	rigidbody.AddForce(-10, 0, 0);
	}

if (Input.GetKey (right)){
	rigidbody.AddForce(10, 0, 0);
	}

}
  
  
}

