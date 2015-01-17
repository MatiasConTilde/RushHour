#pragma strict

var right : KeyCode;
var left  : KeyCode;
var up  : KeyCode;
var down  : KeyCode;
var destination : int;

var inc : float;
var fuerza : float;

function Update () {
	inc = 6;
	fuerza =1000;

  
	if (rigidbody.transform.localScale.x > rigidbody.transform.localScale.z){

		Debug.Log("Estoy en " + rigidbody.position.x + " y voy a " + destination);
		
		if (Mathf.Abs(rigidbody.position.x - destination)<0.5){
  			rigidbody.velocity.x = 0;
  			rigidbody.position.x = destination;
  		}
		
		if(Globales.carriedObject == gameObject){
			if(rigidbody.velocity.x ==0){
			
			
				if(Input.GetKeyDown(left)){
					//rigidbody.position.x= rigidbody.position.x-inc;
					rigidbody.AddForce(new Vector3(-fuerza, 0, 0));
					destination = rigidbody.position.x - inc;
				}
				if(Input.GetKeyDown(right)){
				    //rigidbody.position.x= rigidbody.position.x+inc;
					rigidbody.AddForce(new Vector3(fuerza, 0, 0));
					destination = rigidbody.position.x + inc;
				 }
			}
		}
	}
	
	if (rigidbody.transform.localScale.x < rigidbody.transform.localScale.z){
		
		if (Mathf.Abs(rigidbody.position.z - destination)<0.1){
  			rigidbody.velocity.z = 0;
  			rigidbody.position.z = destination;
  		}
		
		if(Globales.carriedObject == gameObject){
		  if(rigidbody.velocity.z ==0){
				if(Input.GetKeyDown(up)){
				  	//rigidbody.position.z= rigidbody.position.z+inc;
				  	rigidbody.AddForce(new Vector3(0, 0, fuerza));
				  	destination = rigidbody.position.z + inc;
				}
				if(Input.GetKeyDown(down)){
				  	//rigidbody.position.z= rigidbody.position.z-inc;
				  	rigidbody.AddForce(new Vector3(0, 0, -fuerza));
				  	destination = rigidbody.position.z - inc;
				}
		    }  
		}
	}
  
  
}