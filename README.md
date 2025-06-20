# 🧼 Inspetor de Higiene Alimentar

O **Inspetor de Higiene Alimentar** é uma aplicação web inovadora desenvolvida com Node.js que utiliza **processamento de imagens** para detectar possíveis **sinais de mofo ou contaminações visuais** em alimentos.

Essa ferramenta visa auxiliar indústrias alimentícias, comércios e estabelecimentos de inspeção sanitária a realizarem triagens rápidas com baixo custo, utilizando apenas imagens digitais.

---

## 🚀 Funcionalidades

- 📤 Upload de imagens de alimentos;
- 🧠 Análise automática da imagem com base em cores e padrões visuais típicos de mofo;
- 🧾 Exibição de resultado claro com percentual de suspeita;
- 📸 Visualização da imagem analisada;
- 🎨 Interface moderna, responsiva e amigável com Bootstrap 5.

---

## 📦 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Multer** – upload de arquivos
- **Sharp** – redimensionamento e leitura de imagens
- **Bootstrap 5** – interface responsiva e moderna
- **JavaScript puro** no front-end

---

## 🛠️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/davidcarriel/projeto-higiene.git
cd projeto-higiene

```

### 2. Instalar dependências

```bash
npm install

```

### 3. Executar o projeto

```bash
node app.js

```

### 4. Acessar no navegador

Abra seu navegador e vá para:

```
http://localhost:3000

```

----------

## 📁 Estrutura do Projeto

```
inspetor-higiene/
├── app.js                 # Arquivo principal do servidor
├── imageProcessor.js      # Processamento e análise da imagem
├── routes/
│   └── upload.js          # Rota para upload e análise
├── utils/
│   └── detector.js        # Lógica de detecção de anomalias
├── public/
│   └── index.html         # Interface da aplicação
├── uploads/               # Imagens temporárias salvas localmente
└── package.json           # Dependências e config do projeto

```

----------

## 🧪 Lógica de Detecção

A aplicação analisa **padrões de cor** associados a contaminações alimentares como mofo:

-   Verde musgo (fungos frescos);
    
-   Esbranquiçado/cinza (mofo seco);
    
-   Azul claro (fungos tipo penicillium).
    

Essas cores são detectadas usando a média de valores RGB da imagem com base em uma porcentagem mínima de pixels suspeitos.

----------

## ✅ Dependências

As principais bibliotecas utilizadas são:

```json
"dependencies": {
  "express": "^4.18.x",
  "multer": "^1.4.x",
  "sharp": "^0.33.x"
}

```

----------

## 🧼 Casos de Uso

-   Indústrias alimentícias com inspeção visual automatizada;
    
-   Pequenos comércios para triagem rápida de frutas e vegetais;
    
-   Ambientes educacionais como exemplo de projeto de IA ou visão computacional aplicada à segurança alimentar.

----------

## 📃 Licença

Projeto de demonstração acadêmica sem fins lucrativos. Todos os direitos reservados © David Rafael.

----------

## 🙋‍♂️ Autor

Desenvolvido por **David Rafael**  
Engenharia de Software – UEPG  
