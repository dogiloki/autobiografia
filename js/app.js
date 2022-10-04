var content_nav=document.getElementById('content-nav');
var content_info=document.getElementById('content-info');

var nacimiento={
	titulo:"Nacimiento",
	texto:"Nací el 19 de Aagosto del 2002 en Hidalgo, México."
};

var hecho_relevantes={
	titulo:"Hechos relevantes",
	texto:"Nací el 19 de Aagosto del 2002 en Hidalgo, México"
};

var estudios_formacion={
	titulo:"Estudios y formación",
	texto:"Nací el 19 de Aagosto del 2002 en Hidalgo, México"
};

var datos=[
	new Dato(nacimiento.titulo,nacimiento.texto),
	new Dato(hecho_relevantes.titulo,hecho_relevantes.texto),
	new Dato(estudios_formacion.titulo,estudios_formacion.texto)
];

var menu=new Menu(this.content_nav,this.content_info,this.datos);

document.getElementById("btn-izq").addEventListener("click",()=>{
	menu.cambioPag(Util.IZQ);
});

document.getElementById("btn-der").addEventListener("click",()=>{
	menu.cambioPag(Util.DER);
});