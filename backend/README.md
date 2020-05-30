# Recuperar Senha

**Requisitos Funcionais**

- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuario deve receber um e-mail com instrucoes com recuperacao de senha;
- O usuario deve poder resetar sua senha;

**Requisitos Nao Funcionais**

- Utilizar MailTrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em producao;
- O envio de emails deve acontecer em segundo plano (background job);


**Regras de Negocio**

- O link enviado por email para resetar senha deve expirar em 2 horas;
- O usario precisa confirmar a nova senha ao resetar a senha;


# Atualizar Perfil

**Requisitos Funcionais**

- O usuario deve poder atualizar seu nome, email e senha;

**Regras de Negocio**

- O usuario nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha o usuario deve informar a senha antiga
- Para atualizar sua senha o usuario deve confirmar a senha;


# Painel do Prestador

**Requisitos Funcionais**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**Requisitos Nao Funcionais**

- Os agendamentos do prestador no dia deve ser armazenado em chache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviadas em tempo real utilizando Socket.io;


**Regras de Negocio**

- A notificacao deve ter um status de lida ou nao lida, para que o prestador possa controlar;

# Agendamento de Servicos

**Requisitos Funcionais**

- O usuario deve poder listar todos os prestadores de servico cadastrados;
- O usuario deve poder listar os dias de um mes com os horario disponiveis de cada prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestrador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**Requisitos Nao Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negocio**

 - Cada agendamento deve durar uma hora exatamente;
 - Os agendamentos devem estar disponiveis das 8 as 18 (primeiro as 8 ultimo as 17);
 - O usuario nao pode agendar em um horario ja ocupado;
 - O usuario nao pode agendar em um horario que ja passou;
 - O usuario nao pode agendar um horario consigo mesmo;
