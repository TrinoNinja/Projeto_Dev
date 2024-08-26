<template>
  <v-app>
    <div class="d-flex justify-center ma-4">
      <v-card elevation="5" width="100%" outlined>
        <v-card-title>Fale Conosco</v-card-title>
        <v-card-text>

           <v-form ref="form">
              <v-text-field
                label="Nome"
                v-model="nome"
                :rules="[rules.required, rules.min1, rules.max1]">
              </v-text-field>
              <v-text-field 
                label="E-Mail" 
                type="email"
                v-model="email"
                :rules="[rules.required, rules.email]">
              </v-text-field>
              <v-text-field 
                label="Celular"
                v-model="celular"
                :rules="[rules.required, rules.celular]">
              </v-text-field>
              <v-text-field 
                label="Mensagem"
                v-model="mensagem"
                :rules="[rules.required, rules.min1, rules.max2]">
              </v-text-field>
              <v-btn color="bg-purple-darken-2" @click="submitForm" dark style="display:none;">Enviar</v-btn>
            </v-form>

        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="sendEmail">Enviar Mensagem</v-btn>
          <v-btn text>Limpar Dados</v-btn>
        </v-card-actions>
        <v-card-text v-if="isLoaded">
        <v-card-title>Dados Enviados:</v-card-title>
          Nome: {{ nome }} <br />
          E-Mail: {{ email }} <br />
          Celular: {{ celular }} <br />
          Mensagem: {{ mensagem }} <br />
        </v-card-text>

      </v-card>
    </div>

    <v-card style="display:none;">
     <v-card-text>
      <form ref="form2" @submit.prevent="sendEmail">
       <label>Name</label>
       <input type="text" name="user_name" color="red">
       <label>Email</label>
       <input type="email" name="user_email">
       <label>Message</label>
       <textarea name="message"></textarea>
       <v-btn color="bg-purple-darken-2" type="submit" dark>Enviar</v-btn>
      </form>
     </v-card-text>
    </v-card>

  </v-app>
</template>

<script>

//import servicoHome from "../api/contato";
import emailjs from '@emailjs/browser';
//import SMTPClient  from 'emailjs';

var s_login = '';
const s_nm = sessionStorage.getItem("login");
if (s_nm) {
  s_login = s_nm.toUpperCase(); 
} 

export default {
  name: "vwContato",

  data: () => ({
    s_nome: s_login,
    nome: "eliel vieira",
    email: "eliel@elielvieira.com",
    celular: "21 9 9726 9540",
    mensagem: "Testinho...",
    rules: {
      required: (value) => !!value || "Campo obrigatório",
      email: (value) => {
        const pattern = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
        return pattern.test(value) || "E-Mail inválido";
      },
      celular: (value) => {
        const pattern = /^[1-9]{2} [0-9]{1} [0-9]{4} [0-9]{4}$/;
        return pattern.test(value) || "Número inválido (Ex.: 00 0 0000 0000).";
      },
      min1: (value) => value.length >= 6 || "Valor inserido é muito curto.",
      max1: (value) => value.length <= 60 || "Valor inserido é muito longo.",
      max2: (value) => value.length <= 120 || "Valor inserido é muito longo.",
    },  

    isLoaded: false,
  }),

  methods: {
    async acessar() { 
      try {
        //chamada do servico
        ////const resultado = await servicoHome.home(this.dados);
        ////alert(JSON.stringify(resultado));
        ////alert('Seja Bem Vindo '+ this.dados.username);
      } catch (error) {
        console.error('Erro ao carregar site:', error);
        this.response = error.response ? error.response.data : 'Erro desconhecido'; 
      }            
    },

sendEmail() {
alert('Foi...1');
      emailjs
        .sendForm('mail.grupoconstrusites.com', 'contato@grupoconstrusites.com', this.$refs.form2, {
          publicKey: 'wq21WQ@!elielvieira',
        })
        .then(
          () => {
alert('Foi...2');
            console.log('SUCCESS!');
          },
          (error) => {
alert('Foi...3');
            console.log('FAILED.', error.text);
          },
        );
    },

    submitForm() {
      this.$refs.form.validate().then((result) => {
        if (result.valid) {
          //Enviar formulario por e-mail
          alert('Enviando e-mail...');
          this.isLoaded = true;
          console.log("nome: ", this.nome);
          console.log("email: ", this.email);
          console.log("celular: ", this.celular);
          console.log("mensagem: ", this.mensagem);
        }
      });

/*
const client = new SMTPClient({
	user: 'contato@grupoconstrusites.com',
	password: 'wq21WQ@!elielvieira',
	host: 'mail.grupoconstrusites.com',
	ssl: false,
});

client.send(
	{
		text: 'espero que isso funcione',
		from: 'você <contato@grupoconstrusites.com>',
		to: 'alguém <eliel@elielvieira.com>, outra <eliel@elielvieira.com.br>',
		cc: 'pessoa <eliel@elielvieira.com>',
		subject: 'testando emailjs',
	},
	(err, message) => {
		if (err) {
            console.log('Erro ao enviar email:', err);
        } else {
            console.log('Email enviado com sucesso:', message);
        }

	}
);
*/
/*
import nodemailer from 'nodemailer';

// Criar um objeto transportador
const transporter = nodemailer.createTransport({
  host: 'mail.grupoconstrusites.com',
  port: 465,
  secure: false, 
  auth: {
    user: 'contato@grupoconstrusites.com',
    pass: 'wq21WQ@!elielvieira',
  }
});

// Configurar o objeto mailoptions
const mailOptions = {
  from: 'contato@grupoconstrusites.com',
  to: 'eliel@elielvieira.com',
  subject: 'Enviando Email usando Node.js',
  text: 'Isso foi fácil!'
};

// Enviar o email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erro:', error);
  } else {
    console.log('Email enviado:', info.response);
  }
});
*/

/*
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
     host: "mail.operandirj.com.br",
     port: 587,
     secure: false,
     auth: {
         user: "eliel@operandirj.com.br",
         pass: "wq21WQ@!!QAZXSW@2023eliel"
     }
});

let mailOptions = {
    from: "Teste de email <eliel@operandirj.com.br>",
    to: "elielvieira@gmail.com",
    subject: "Testinho",
    text: "Testando envio de e-mail ..."
//    html: "Testando envio de e-mail ...",
//    msg: "teste..."    
};

transporter.sendMail(mailOptions, function(err, dados) {
  if (err) {
    console.log("Erro: " + err + dados);
  } else {
    console.log("E-Mail enviado com sucesso.");
  }
});
*/

    },       
  },

};

</script>
