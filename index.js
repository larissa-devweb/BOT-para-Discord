const  { isValidCommand }  =  require ( './common' ) ; 
const  { Client , Intents }  =  require ( 'discord.js' ) ; 
const  config  =  require ( './config.json' ) ; 

const  cliente  =  novo  cliente ( { 
  intenções : [ Intenções . BANDEIRAS . GUILDS ,  Intenções . BANDEIRAS . GUILD_MESSAGES ] , 
} ) ; 

cliente . em ( 'pronto' ,  ( )  =>  { 
  consola . log ( `Logado como ${ client . user . tag } !` ) ; 
} ) ; 

cliente . on ( 'messageCreate' ,  ( mensagem )  =>  { 
  if  ( mensagem.autor.bot ) return ; _ _  _ _ 
  if  ( ! message . content .startWith ' ( !' ) )  return ; 

  const  [ inputCommand , ... args ]  =  mensagem . conteúdo . dividir ( ' ' ) ; 

  const  comando  =  inputCommand . fatia ( 1 ) ; 

  if  ( ! isValidCommand ( comando ) )  { 
    retorno  mensagem . responder ( 
      'Meteu essa? Não peguei esse comando ai não parceiro.' 
    ) ; 
  } 

  if  ( comando  ===  'soma' )  { 
    const  soma  =  args . reduce ( ( acc ,  curr )  =>  acc  +  Número ( curr ) ,  0 ) ; 

    message . reply ( `A soma dos número é:  ${ sum } ` ) ; 
  } 
} ) ; 

cliente . login ( config.BOT_TOKEN ; _ ) _ 
