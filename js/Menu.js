class Menu{

	constructor(obj_nav,obj_info,datos){
		this.obj_nav=obj_nav;
		this.obj_info=obj_info;
		this.datos=datos;
		this.pag=0;
		this.inicio();
	}

	inicio(){
		this.datos.forEach((dato,indice)=>{
			let option=document.createElement("li");
			option.innerHTML=dato.titulo;
			option.setAttribute("id","op"+indice);
<<<<<<< HEAD
			option.addEventListener("click",()=>{
				this.pag=indice;
				this.cambioPag();
			});
=======
>>>>>>> 921abcfa4ac5810f16aded92d0db4a4d0063fea0
			this.obj_nav.appendChild(option);
		});
		this.mostrar();
	}

<<<<<<< HEAD
	cambioPag(op=null){
		if(op!=null){
			this.pag=Util.cambioNum(this.pag,0,this.datos.length-1,op);
		}
=======
	cambioPag(op){
		this.pag=Util.cambioNum(this.pag,0,this.datos.length-1,op);
>>>>>>> 921abcfa4ac5810f16aded92d0db4a4d0063fea0
		this.mostrar();
	}

	mostrar(){
		this.obj_info.getElementsByClassName("titulo")[0].innerHTML=datos[this.pag].titulo;
		this.obj_info.getElementsByClassName("texto")[0].innerHTML=datos[this.pag].texto;
		this.obj_nav.childNodes.forEach((option)=>{
			let op=option.getAttribute("id").replaceAll("op","");
			option.setAttribute("style",op==this.pag?"color: #4050a9; font-weight: bold":"color: #353535; font-weight: none");
		})
	}

}