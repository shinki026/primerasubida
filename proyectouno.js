const fs = require('fs');

let cursos = [{
	id: 1,
	nombre: 'programacion',
	duracion: 32,
	valor: '$ 30.000'
},
{
	id: 2,
	nombre: 'bases 2',
	duracion: 40,
	valor: '$ 50.000'
},
{	
	id: 3,
	nombre: 'software 1',
	duracion: 45,
	valor: '$ 100.000'
}
]


function listarTodos(){
	let tiempo=0;

		for (let i = 0; i < cursos.length; i++) {
			setTimeout(function(){
				console.log('El curso se llama ' + cursos[i].nombre + '\n' +
							'su id es ' + cursos[i].id + '\n' +
							'tiene una duracion de ' + cursos[i].duracion + ' horas' + '\n' +
							'y un valor de ' + cursos[i].valor + ' pesos' + '\n');
				},tiempo);

			tiempo=tiempo+2000;
		}	
}

function listar(){
	for (var i = 0; i < cursos.length; i++) {
		console.log('El curso se llama ' + cursos[i].nombre + '\n' +
					'su id es ' + cursos[i].id + '\n' +
					'tiene una duracion de ' + cursos[i].duracion + ' horas' + '\n' +
					'y un valor de ' + cursos[i].valor + ' pesos' + '\n');
	}

}

const opciones = {
	id:{
		demand:true,
		alias: 'i'
	},
	nombre:{
		demand:true,
		alias:'n'
	},
	cedula:{
		demand:true,
		alias:'c'
	}
}

const argv = require('yargs')
	.command('inscribir','inscribirme en un curso',opciones)
	.argv


let buscarCurso = (i,cursos) => {
		return cursos.find(function(cursos){
			return cursos.id==i;
		});
}

let v = buscarCurso(argv.i,cursos);

let crearArchivo = (v) => {

	if(v != undefined){
		texto = 'El estudiante ' + argv.n + '\n' +
				' con cedula ' + argv.c + '\n' +
				' se ha matriculado en el curso ' + v.nombre + '\n' +
				' tiene una duracion de ' + v.duracion + ' horas y un valor de ' + v.valor + ' mil pesos';

		fs.writeFile('matricula.txt',texto,(err) =>{
		if(err) throw (err);
		console.log('se ha creado el archivo');
	});
	}
	else {
		if(argv.i != undefined){
			console.log('Ha ingresado un ID que no corresponde a ningun curso');
			listar();
		}else{
			listarTodos();
		}

	}
}

crearArchivo(v);
