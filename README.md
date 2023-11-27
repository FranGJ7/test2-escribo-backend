<body>

<h1>API Documentation</h1>

<p>Esta documentação descreve os endpoints disponíveis na API para autenticação de usuários.</p>

<h2>Base URL da API</h2>

<p><a href="https://test2-escribo-backend.onrender.com/">https://test2-escribo-backend.onrender.com/</a></p>

<h2>1. Registrar um Novo Usuário</h2>

<h3>Endpoint</h3>
<p><strong>Método:</strong> POST</p>
<p><strong>URL:</strong> <a href="https://test2-escribo-backend.onrender.com/register">https://test2-escribo-backend.onrender.com/register</a></p>

<h3>Parâmetros</h3>
<ul>
    <li><strong>name</strong>: Nome do usuário.</li>
    <li><strong>email</strong>: Endereço de e-mail do usuário.</li>
    <li><strong>telephone</strong>: Número de telefone do usuário.</li>
    <li><strong>password</strong>: Senha do usuário (entre 6 e 16 caracteres).</li>
    <li><strong>confirmPassword</strong>: Confirmação da senha do usuário.</li>
</ul>

<h2>Exemplo de Solicitação</h2>

<p><strong>Método:</strong> POST</p>
<p><strong>URL:</strong> <a href="https://test2-escribo-backend.onrender.com/login">https://test2-escribo-backend.onrender.com/login</a></p>

<h3>Parâmetros</h3>
<ul>
    <li><strong>email</strong>: Endereço de e-mail do usuário.</li>
    <li><strong>password</strong>: Senha do usuário</li>
</ul>

<pre>
<code>
{
    "email": "usuario@example.com",
    "telephone": [
        { "ddd": "11", "number": "123456789" }
    ]
}
</code>
</pre>

<h2>2. Autenticar Usuário</h2>



<h2>3. Obter Informações do Usuário Autenticado</h2>

<ul>
    <li>Incluir Token ao cabeçalho de autorização (<code>Authorization  {{TOKEN}}</code>) nas solicitações que requerem autenticação.</li>
    <li>Utilize o Postman para testar os endpoints da API.</li>
</ul>
