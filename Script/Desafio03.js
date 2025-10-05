//Curso Julio de Lima // Desafio 3
//Ferramena: K6

import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomString, uuidv4, urlencode } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

let res_get, res_post,end, token, payload = '';

const url  = 'http://localhost:3000';
 
export const options = {
  
  stages: [
    { duration: '1s', target: 10 },
  /*	
    { duration: '1s', target: 30 },
    { duration: '10s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 50 },
    { duration: '5s', target: 0 },
  */
  ],
   
  thresholds: {
    http_req_failed: ['rate<0.20'], // http errors should be less than 1%
    http_req_duration: ['p(95)<100'], // 95 percent of response times must be below 1000ms
	checks: ['rate>0.95'], // pelo menos 95% dos checks devem passar
  },
};

export default function () {

   const randomUUID = uuidv4(6);
    
   const params = {
     headers: {
       'Content-type': 'application/json',
       'Accept': 'aplication/json',
     },
   };
      
   //console.log('==================================================================================================='); 
   //console.log('======== Cadastrando Usuario ======='); 
 
    payload = {username: `${randomString(10)}@empresa.com.br`, password: '123456', favorecidos: 'Manoel' };
    end = '/users/register';
 
    res_post = http.post(url + end, JSON.stringify(payload), params,{});

    check(res_post, {      
          'Retornando o status Code 201 - registrar novo usuario: sucesso': (res_post) => res_post.status === 201,
         // 'Ta retornando no response do post a informacao "username": sucesso': (res_post) => res_post.body('username'),
    });
 
    sleep(0.3);
   
    //console.log('==================================================================================================='); 
    //console.log('======== Logando com Usuario ======='); 
    //console.log('======== Retornando com Token ======='); 
   
    payload = {username: 'julio', password: '123456' };
 
    end = '/users/login';
 
    res_post = http.post(url + end, JSON.stringify(payload), params,{});

    check(res_post, {      
          'Retornando o status Code 201 - login do usuario: sucesso': (res_post) => res_post.status === 200,
         // 'Ta retornando no response do post a informacao "saldo": sucesso': (res_post) => res_post.body('user.saldo'),
    });

	const resultado = res_post.json();
    //console.log (resultado);
		
    token = resultado.token,  
    //console.log (token);
   
    sleep(0.3);
 
 
    //console.log('==================================================================================================='); 
    //console.log('======== Listar Usuarios ======='); 
  
    end = '/users';
    res_get = http.get(url + end, params);

    check(res_get, { 
          'Retornando o status Code 200 - listar usuarios: sucesso': (res_get) => res_get.status === 200,
         // 'Ta retornando no response do get a informacao "favorecidos": sucesso': (res_get) => res_get.includes('favorecidos'),
    });
    
	sleep(0.3);
  
  
    //console.log('==================================================================================================='); 
    //console.log('======== Realizar uma Transferência ======='); 
   
    payload = {from: 'julio', to: 'priscila', value: 10 };
 
    end = '/transfers';
 
    res_post = http.post(url + end, JSON.stringify(payload),{
               headers: {'Content-Type':'application/json','Accept':'application/json', 'Authorization': `Bearer ${token}`},
    });

    check(res_post, {      
          'Retornando o status Code 201 - realizar transferência: sucesso': (res_post) => res_post.status === 201,
         //'Ta retornando no response do post a informacao "date": sucesso': (res_post) => res_post.body('date'),
    });
    //console.log(res_post); 
    sleep(0.3)

    //console.log('==================================================================================================='); 
    //console.log('======== Listar Transferências ======='); 
    
    end = '/transfers';
    res_get = http.get(url + end, {
	          headers: {'Content-Type':'application/json','Accept':'application/json', 'Authorization': `Bearer ${token}`},   
    });

    check(res_get, { 
          'Retornando o status Code 200 - listar transferências: sucesso': (res_get) => res_get.status === 200,
        // 'Ta retornando no response do get a informação "from": sucesso': (res_get) => res_get.includes('from'),
    });
    
	sleep(0.3);


}  
