<div align="center">

# Portifólio Pessoal

**Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro.**  
Arquitetura modular, animações fluidas e design responsivo para PC, tablet e celular.

[![Acessar Portfólio](https://img.shields.io/badge/Portfólio-Acessar_Agora-91713C?style=for-the-badge)](https://victormoreiraofc.github.io/victormoreiraofc-personal-portfolio/)
[![License](https://img.shields.io/badge/License-Apache_2.0-6B5228?style=for-the-badge)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-58%25-E34F26?style=for-the-badge&logo=html5&logoColor=white)](.)
[![CSS](https://img.shields.io/badge/CSS3-38%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-4%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](.)

</div>

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Como rodar localmente](#como-rodar-localmente)
- [Como usar este template](#como-usar-este-template)
- [Deploy no GitHub Pages](#deploy-no-github-pages)
- [Personalização](#personalização)
- [Licença](#licença)

---

## Sobre o projeto

Este repositório contém o código-fonte do meu portfólio pessoal: uma página web estática criada do zero com HTML5, CSS3 e JavaScript, sem frameworks ou dependências externas.

O projeto foi desenvolvido com foco em:

- **Apresentação profissional** clara e objetiva para recrutadores e clientes
- **Arquitetura modular** com componentes separados por responsabilidade
- **Performance:** zero dependências, carregamento rápido
- **Responsividade:** layout adaptado para PC, tablet e celular
- **Facilidade de manutenção:** qualquer seção pode ser editada de forma independente

---

## Como rodar localmente

Não precisa instalar nada. É HTML puro.

**Opção 1: Abrir direto no navegador:**

```bash
# Clone o repositório
git clone https://github.com/victormoreiraofc/victormoreiraofc-personal-portfolio.git

# Entre na pasta
cd victormoreiraofc-personal-portfolio

# Abra o index.html no seu navegador
# Windows:
start index.html

# Mac:
open index.html

# Linux:
xdg-open index.html
```

**Opção 2: Live Server (recomendado para desenvolvimento):**

Se usar VS Code, instale a extensão **Live Server**, clique com o botão direito no `index.html` e selecione **Open with Live Server**. O site atualiza automaticamente a cada salvamento.

---

## Como usar este template

Quer criar o seu próprio portfólio baseado neste projeto? Siga os passos:

### 1. Faça um fork ou clone o repositório

```bash
git clone https://github.com/victormoreiraofc/victormoreiraofc-personal-portfolio.git
cd victormoreiraofc-personal-portfolio
```

### 2. Substitua as informações pessoais no `index.html`

Localize e edite os seguintes trechos:

```html
<!-- Nome e título -->
<h1>Victor Moreira</h1>
<p>Desenvolvedor de Software</p>

<!-- Sobre mim -->
<p>Olá, Mundo. Prazer Victor!...</p>

<!-- Métricas -->
<span>4+ Anos de Experiência Freelancer</span>
<span>3+ Projetos Completos</span>
<span>20+ Clientes Atendidos</span>
```

### 3. Substitua as imagens

Navegue até `frontend/public/components/assets/images/` e substitua:

| Arquivo | O que é |
|---|---|
| `background-top-image.png` | Imagem de fundo do hero |
| `person.png` | Sua foto na seção Sobre Mim |
| `project-*.png` | Imagens dos seus projetos |
| `og-image.png` | Preview quando o link é compartilhado |
| `favicon.ico` | Ícone da aba do navegador |

### 4. Atualize os projetos

Cada card de projeto segue este padrão. Localize e replique para os seus:

```html
<div class="project-card">
  <img src="frontend/public/components/assets/images/project-seuProjeto.png" alt="Nome do Projeto">
  <h3>Nome do Projeto</h3>
  <p>Descrição do que o projeto faz e seu papel nele.</p>
  <a href="https://github.com/seuuser/seurepositorio">Acessar código-fonte</a>
</div>
```

### 5. Atualize os links de contato

```html
<a href="https://instagram.com/seuperfil">Instagram</a>
<a href="mailto:seuemail@email.com">Email</a>
<a href="https://linkedin.com/in/seuperfil">LinkedIn</a>
<a href="https://wa.me/55SEUNUMERO">WhatsApp</a>
<a href="https://github.com/seuuser">GitHub</a>
```

### 6. Substitua o CV para download

Coloque seu PDF em `frontend/public/components/assets/files/` e atualize o link:

```html
<a href="frontend/public/components/assets/files/SEU_CURRICULO.pdf" download>
  Download CV
</a>
```

---

## Deploy no GitHub Pages

Para publicar o seu portfólio gratuitamente no GitHub Pages:

1. Crie um repositório público no GitHub com o nome que quiser
2. Suba todos os arquivos para o branch `main`:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/seuuser/seurepositorio.git
git push -u origin main
```

3. No repositório, vá em **Settings → Pages**
4. Em **Branch**, selecione `main` e clique em **Save**
5. Aguarde 1-2 minutos. Seu site estará disponível em:

```
https://seuuser.github.io/seurepositorio/
```

> **Dica:** Toda vez que der `git push`, o GitHub Pages atualiza o site automaticamente. Acompanhe o status em **Actions**.

---

## Personalização

### Cores

As cores principais estão definidas em CSS. Para mudar o tema do site, localize as variáveis no arquivo de estilo principal:

```css
:root {
  --color-primary: #sua-cor;
  --color-secondary: #sua-cor;
  --color-background: #sua-cor;
}
```

### Fontes

O projeto usa fontes do Google Fonts. Para trocar, substitua o link de importação no `<head>` do `index.html` e atualize a propriedade `font-family` no CSS.

### Animações

As animações de entrada são feitas com CSS puro. Para desativá-las ou ajustá-las, localize as classes com `@keyframes` nos arquivos de estilo.

---

## Licença

Distribuído sob a licença **Apache 2.0**.  
Isso significa que você pode usar, modificar e distribuir este projeto, inclusive para uso comercial, desde que mantenha os créditos ao autor original.

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
