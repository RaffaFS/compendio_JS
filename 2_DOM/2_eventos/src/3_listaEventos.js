// https://developer.mozilla.org/en-US/docs/Web/Events
// Esse é um link com um compêndio de todos os eventos existentes atuais

//=====================================================================================================//
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// ===== LISTA DE EVENTOS MAIS ÚTEIS ===== //

// 'click' => faz algo quando determinado elemento é clicado
// 'dblclick' => faz algi quando determinado elemeento leva um clique duplo
// 'mouseover' => faz algo enquanto o mouse está sobre o elemento chave
// 'mouseout' => faz ago quando o mouse sai da box do elemento chave
// 'change' => faz algo quando o valor de determinado input é alterado (mais detalhes abaixo)
// 'input' => faz algo quando o valor de determinada input é alterado (mais detalhes abaixo)
// 'submit' => faz algo quando determinado formulário é enviado
// 'focus' => faz algo quando determinado elemento ganha o estado de "focus"
// 'blur' => faz algo quando determinado elemento perde o estado de "focus"
// 'transitionend' => faz algo quando uma determinada transição termina
// 'animationend' => faz algo quando uma determinada animação termina
// 'error' => "segura um erro", sendo executado quando o elemento não age como deveria
// // // // //
// Usamos estes com: "elementoEscolhido.addEventListener()"
// Em relação a change e input, o primeiro só é acionado quando um valor é alterado e perde o foco
// geralmente mais utilizado em casos de checkbox, radio e textarea; o segundo é acionado imediatamente
// após qualquer alteração no valor do campo, sem a necessidade do elemento perder o foco antes de
// ser acionado, geralmente mais utilizados em input tipo text, password, number e textarea.

// 'DOMContentLoaded' => faz algo quando o DOM está pronto, ou seja, logo após o carregamento da page
// 'keydown' => faz algo enquanto uma tecla está sendo pressionada
// 'keyup' => faz algo quando uma tecla é solta
// // // // //
// Usamos estes com: "document.addEventListener()"
// O primeiro é muito usado para que o documento não seja lido/executado antes do carregamento da page

// 'scroll' => faz algo quando o usuário faz o scroll na janela
// 'load' => faz algo quando o conteúdo da página é carregado
// 'resize' => faz algo quando a janela é redimensionada
// // // // //
// Usamos estes com: "window.addEventListener()"