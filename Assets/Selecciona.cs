using UnityEngine;
using System.Collections;

public class Selecciona : MonoBehaviour {
	GameObject mainCamera;
	static GameObject carriedObject;
	
	void Start() {
		mainCamera = GameObject.FindWithTag("MainCamera");
	}
	
	
	void Update () {
		//Debug.Log("Hola, soy carriedObject" + carriedObject.name );
		//Debug.Log("Hola, soy carriedObject" + carriedObject);
		if (carriedObject != null) {
			// Debug.Log("Hola, soy carriedObject" + carriedObject.name );

		}
			//GUI.DrawTexture(Rect(0,0,500,500),myTexture);

	}
	

	void pickup(){
		if (Input.GetKeyDown(KeyCode.E)) {
			int x = Screen.width / 2;
			int y = Screen.height / 2;
			
			Ray ray = mainCamera.camera.ScreenPointToRay(new Vector3(x,y));
			RaycastHit hit;
			if (Physics.Raycast(ray,out hit)) {
				Debug.Log("Estamos tocando algo");
//				hit.collider.GetComponent<Pickupable>();
				//if (p != null){
					//carrying = true;
					//carriedObject = p.gameObject;
				//}
			}
		}
	}
}