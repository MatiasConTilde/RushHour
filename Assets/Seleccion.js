#pragma strict
//GameObject mainCamera;
//GameObject myCamara;

function Start () {
 	// mainCamera = GameObject.FindWithTag("MainCamera");
}

function Update () {

}

function OnMouseDown () {
		Debug.Log("Hola, soyyy " + gameObject);
		Globales.carriedObject = gameObject;
	}