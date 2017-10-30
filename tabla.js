		 alert("Utiliza como prueba esta tabla de posiciones")

		 var aux=0;
			function validarNumP(e) { // Funcion para validar numeros positivos
					tecla = (document.all) ? e.keyCode : e.which; 
					if (tecla==8) return true; // backspace
					if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
					if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
					if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
			 
					patron = /[0-9]/; //patron
			 
					te = String.fromCharCode(tecla); 
					return patron.test(te); // prueba de patron
			}
			
			function llenarGA(){ 
			    var goles1 = document.fGoles.golesA.value;
				if ( goles1 == "") 
				{
					alert("Debes ingresar los goles del equipo A");				
					return false;
				}
				return true;
			}
			
			function llenarGB(){ 
				var goles2 = document.fGoles.golesB.value ;
				if ( goles2 == "") 
				{
					alert("Debes ingresar los goles del equipo B");
					return false;
				}
				return true;		
			}
			
			function validarEA(){ 
			    var index = document.f1.EA.options[document.f1.EA.selectedIndex].text ;
				if ( index == "") 
				{
					alert("Debes escoger un equipo en el Grupo A");	
					return false;
				}
				return true;			
			} 
			function validarEB(){ 
			    var index = document.f2.EB.options[document.f2.EB.selectedIndex].text ;
				if ( index == "") 
				{
					alert("Debes escoger un equipo en el Grupo B");	
				return false;
				}
				return true;		
			}		
	
			function cambiar_color_over(celda){ 
				celda.style.backgroundColor="#66ff33" 
			} 
			function cambiar_color_out(celda){ 
			   celda.style.backgroundColor="#dddddd" 
			} 
            function iniciar()
            {
               nodoTabla = document.getElementById ("tabla1");
            }
			function limpiar()
            {
				var z=nodoTabla.getElementsByTagName('td'); 
				var m,x; 
				for(var r=8;r<z.length;r=r+1) 
				{ 
					m=z[r];
			     	while(m) 
					{ 
						x=m; 
						m=x.childNodes[0];
					} 
					if(r%8!=0)
						x.parentNode.innerHTML=0;
				}
            }
			
			function Aplicar()
            {
				if(validarEA()&validarEB()&llenarGA()&llenarGB())
				{
			
					var z=nodoTabla.getElementsByTagName('td'); 
					var m,x; 
					var s1 = parseInt(document.fGoles.golesA.value);
					var s2 = parseInt(document.fGoles.golesB.value);
					var a1;
					for(var r=8;r<z.length;r=r+1) 
					{ 	m=z[r];
						a=r;
						while(m) 
						{ 
							x=m; 
							m=x.childNodes[0];
						} 
						
						if(x.parentNode.innerHTML==document.f1.EA.options[document.f1.EA.selectedIndex].text)
						{
							
							if(s1>s2)
							{
								m=z[r+1];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+3;
								m=z[r+2];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								m=z[r+3];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								m=z[r+6];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+(s1-s2);
							}
							else
							{
								if(s1==s2)
								{
									m=z[r+1];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+2];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+4];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								}
								else
								{	
									m=z[r+2];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+5];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+7];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+(s2-s1);							
								}
								
							}
						}
					}    					
				}
			}
			function Aplicar2()
            {
				if(validarEA()&validarEB()&llenarGA()&llenarGB())
				{
					var z=nodoTabla.getElementsByTagName('td'); 
					var m,x; 
					var s1 = parseInt(document.fGoles.golesA.value);
					var s2 = parseInt(document.fGoles.golesB.value);
					var a1;
					for(var r=8;r<z.length;r=r+1) 
					{ 	m=z[r];
						a=r;
						while(m) 
						{ 
							x=m; 
							m=x.childNodes[0];
						} 
						
						if(x.parentNode.innerHTML==document.f2.EB.options[document.f2.EB.selectedIndex].text)
						{						
							if(s1<s2)
							{
								m=z[r+1];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+3;
								m=z[r+2];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								m=z[r+3];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								m=z[r+6];
								while(m) 
								{ 
									x=m; 
									m=x.childNodes[0];
								} 
								x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+(s2-s1);
							}
							else
							{
								if(s1==s2)
								{
									m=z[r+1];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+2];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+4];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
								}
								else
								{	
									m=z[r+2];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+5];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+1;
									m=z[r+7];
									while(m) 
									{ 
										x=m; 
										m=x.childNodes[0];
									} 
									x.parentNode.innerHTML=parseInt(x.parentNode.innerHTML)+(s1-s2);							
								}
								
							}
						}
					}    					
				}
			}