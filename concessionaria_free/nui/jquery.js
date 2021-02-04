$(document).ready(function(){
	let actionContainer = $("#actionmenu");
	let actionButton = $("#actionbutton");

	window.addEventListener("message",function(event){
		let item = event.data;
		switch(item.action){
			case "showMenu":
				actionButton.fadeIn(1000);
				actionContainer.fadeIn(1000);
			break;

			case "hideMenu":
				actionButton.fadeOut(1000);
				actionContainer.fadeOut(1000);
			break;

			case 'updateCarros':
				updateCarros();
			break;

			case 'updateMotos':
				updateMotos();
			break;

			case 'updateImport':
				updateImport();
			break;

			case 'updatePossuidos':
				updatePossuidos();
			break;
		}
	});

	$("#inicio").load("./inicio.html");

	document.onkeyup = function(data){
		if (data.which == 27){
			$.post("http://concessionaria_free/dealerClose",JSON.stringify({}),function(datab){});
		}
	};
});

$('#actionbutton').click(function(e){
	$.post("http://concessionaria_free/dealerClose",JSON.stringify({}),function(datab){});
});

const formatarNumero = (n) => {
	var n = n.toString();
	var r = '';
	var x = 0;

	for (var i = n.length; i > 0; i--) {
		r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
		x = x == 2 ? 0 : x + 1;
	}

	return r.split('').reverse().join('');
}

const carregarMenu = (name) => {
	return new Promise((resolve) => {
		$("#inicio").load(name+".html",function(){
			resolve();
		});
	});
}

const updateCarros = () => {
	$.post("http://concessionaria_free/requestCarros",JSON.stringify({}),(data) => {
		let i = 0;
		const nameList = data.veiculos.sort((a,b) => (a.nome > b.nome) ? 1: -1);
		$('#inicio').html(`
		<div class="comprar">COMPRAR</div>
		<div class="title">
			<p id="paragrafotitle">CARROS </p>
			<p id="paragrafotitle">IMAGEM </p>
			<p id="paragrafotitle1">MALA(KG)</p>
			<p id="paragrafotitle2">VALOR(R$)</p>
			</div>
			${nameList.map((item) => (`
				<button onclick="mostrafoto();" id="modelfoto" class="model" data-name-key="${item.k}">
					<div class="id">${i = i + 1}</div>
					<div class="name">${item.nome}
						<div id="backgrounded-car" style="background-image: url('http://200.9.155.240/vehicles/${item.nome}.png'); "></div>
					</div>
					<div class="valor">$${formatarNumero(item.price)}</div>
					<div class="malas">${item.chest}</div>
					<div class="estoque">${item.stock}</div>
				</button>
			`)).join('')}
		`);
	});
}

const updateMotos = () => {
	$.post("http://concessionaria_free/requestMotos",JSON.stringify({}),(data) => {
		let i = 0;
		const nameList = data.veiculos.sort((a,b) => (a.nome > b.nome) ? 1: -1);
		$('#inicio').html(`
		<div class="comprar">COMPRAR</div>
		<div class="title">
			<p id="paragrafotitle">MOTOS </p>
			<p id="paragrafotitle">IMAGEM </p>
			<p id="paragrafotitle1">MALA(KG)</p>
			<p id="paragrafotitle2">VALOR(R$)</p>
		</div>
		${nameList.map((item) => (`
				<button onclick="mostrafoto();" id="modelfoto" class="model" data-name-key="${item.k}">
					<div class="id">${i = i + 1}</div>
					<div class="name">${item.nome}
						<div id="backgrounded-car" style="background-image: url('http://200.9.155.240/vehicles/${item.nome}.png');  "></div>
					</div>
					<div class="valor">$${formatarNumero(item.price)}</div>
					<div class="malas">${item.chest}</div>
					<div class="estoque">${item.stock}</div>
				</button>
			`)).join('')}
		`);
	});
}
const updateImport = () => {
	$.post("http://concessionaria_free/requestImport",JSON.stringify({}),(data) => {
		let i = 0;
		const nameList = data.veiculos.sort((a,b) => (a.nome > b.nome) ? 1: -1);
		$('#inicio').html(`
			<div class="comprar">COMPRAR</div>
			<div class="title">
				<p id="paragrafotitle">IMPORTADOS </p>
				<p id="paragrafotitle">IMAGEM </p>
				<p id="paragrafotitle1">MALA(KG)</p>
				<p id="paragrafotitle2">VALOR(R$)</p>
			</div>
			${nameList.map((item) => (`
				<button onclick="mostrafoto();" id="modelfoto" class="model" data-name-key="${item.k}">
					<div class="id">${i = i + 1}</div>
					<div class="name">${item.nome}
						<div id="backgrounded-car" style="background-image: url('http://200.9.155.240/vehicles/${item.k}.png'); "></div>
						<div id="backgrounded-car2" style="background-image: url('images/${item.k}.png'); "></div>
					</div>
					<div class="valor">$${formatarNumero(item.price)}</div>
					<div class="malas">${item.chest}</div>
					<div class="estoque">${item.stock}</div>
				</button>
			`)).join('')}
		`);
	});
}

const updatePossuidos = () => {
	$.post("http://concessionaria_free/requestPossuidos",JSON.stringify({}),(data) => {
		let i = 0;
		const nameList = data.veiculos.sort((a,b) => (a.nome > b.nome) ? 1: -1);
		$('#inicio').html(`
			<div class="vender"></div>
			<div class="title">
				<p id="paragrafotitle">POSSUÍDOS </p>
				<p id="paragrafotitle">IMAGEM </p>
				<p id="paragrafotitle1">MALA(KG)</p>
				<p id="paragrafotitle2">VALOR(R$)</p>
			</div>
			${nameList.map((item) => (`
				<button onclick="mostrafoto();" id="modelfoto" class="model" data-name-key="${item.k}">
					<div class="id">${i = i + 1}</div>
					<div class="name">${item.nome}
						<div id="backgrounded-car" style="background-image: url('http://200.9.155.240/vehicles/${item.nome}.png'); "></div>
						<div id="backgrounded-car2" style="background-image: url('http://200.9.155.240/vehicles/${item.k}.png'); "></div>
						<div id="backgrounded-car3" style="background-image: url('images/${item.k}.png'); "></div>
					</div>
					<div class="valor">$${formatarNumero(item.price)}</div>
					<div class="malas">${item.chest}</div>
				</button>
			`)).join('')}
		`);
	});
}

$(document).on("click",".model",function(){
	let $el = $(this);
	let isActive = $el.hasClass('active');
	$('.model').removeClass('active');
	if(!isActive) $el.addClass('active');
});

$(document).on("click",".comprar",function(){
	let $el = $('.model.active');
	if($el){
		$.post("http://concessionaria_free/buyDealer",JSON.stringify({
			name: $el.attr('data-name-key')
		}));
	}
});