# Cadastro de usuário
**RF**
[]Deve ser possível cadastrar um novo usuário

**RN**
[]Não deve ser possível cadastrar um usuário com e-mail ou username já existentes
[]Não deve ser possível cadastrar um usuário como admin

# Busca de Usuário
**RF**
[]Deve ser possível buscar um usuário por email

# Edição de usuário
**RF**
[]Deve ser possível editar o name, username e password do usuário

**RN**
[]Não deve ser possível editar um usuário não existente
[]Somente usuários logados devem conseguir alterar seus próprios dados

# Autenticar usuário
**RF**
[]Deve ser possível autenticar um usuário
[]A autenticação do usuário deve ser feita por um token
[]O token deve ser do tipo refresh token

**RN**
[]Não deve ser possível autenticar um usuário não existente
[]Não deve ser possível autenticar um usuário com e-mail ou senha incorretos