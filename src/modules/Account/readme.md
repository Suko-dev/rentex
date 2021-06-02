# Cadastro de usuário
**RF**
<p>[x]Deve ser possível cadastrar um novo usuário</p>

**RN**
<p>[x]Não deve ser possível cadastrar um usuário com e-mail ou username já existentes</p>
<p>[x]Não deve ser possível cadastrar um usuário como admin</p>

# Busca de Usuário
**RF**
<p>[x]Deve ser possível buscar um usuário por email</p>

# Edição de usuário
**RF**
<p>[]Deve ser possível editar o name, username e password do usuário</p>

**RN**
<p>[]Não deve ser possível editar um usuário não existente</p>
<p>[]Somente usuários logados devem conseguir alterar seus próprios dados</p>

# Autenticar usuário
**RF**
<p>[x]Deve ser possível autenticar um usuário</p>
<p>[x]A autenticação do usuário deve ser feita por um token</p>
<p>[]O token deve ser do tipo refresh token</p>

**RN**
<p>[x]Não deve ser possível autenticar um usuário não existente</p>
<p>[x]Não deve ser possível autenticar um usuário com e-mail ou senha incorretos</p>