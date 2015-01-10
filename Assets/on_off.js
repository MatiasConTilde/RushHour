#pragma strict

var rango : float;
var bateria : float;

function Start () 
{
	rango = 30;
	bateria = 4;
}

function Update () 
{
	gameObject.GetComponent(Light).range = rango;
	gameObject.GetComponent(Light).intensity = bateria;
	if (Input.GetButtonDown("Fire1"))
	{
		if (rango != 0)
		{
			rango = 0;
		}
		else{
			rango = 30;
		}
	}
}