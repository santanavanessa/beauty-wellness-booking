# ✂️ Trimmr - Sistema de Agendamento para Barbearias

![Project Status](https://img.shields.io/badge/status-concluído-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 Sobre o Projeto

O **Trimmr** é uma plataforma Full Stack de agendamento de serviços para barbearias e salões de beleza. O projeto foi desenvolvido com uma abordagem **Mobile-First**, garantindo uma experiência fluida em dispositivos móveis, mas totalmente responsiva para telas maiores (tablets e desktops).

O objetivo principal é facilitar a conexão entre clientes e estabelecimentos, permitindo agendamentos rápidos, visualização de serviços e gerenciamento de reservas pessoais.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema React e Node.js:

- **Framework Principal:** [Next.js](https://nextjs.org/) 
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/) (Cards, Sheets, Avatars, Buttons, etc.)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) 
- **ORM:** [Prisma](https://www.prisma.io/)
- **Autenticação:** [NextAuth.js](https://next-auth.js.org/) 
- **Validação de Forms:** Zod
- **Datas:** date-fns
- **Qualidade de Código:** ESLint, Prettier, Husky, Lint-staged e Commitlint (Conventional Commits)

## ✨ Funcionalidades

- **Autenticação Segura:** Login social com Google via NextAuth.
- **Busca Inteligente:** Pesquisa de barbearias por nome (Case Insensitive).
- **Catálogo de Serviços:** Páginas individuais para cada barbearia listando serviços, preços e descrições.
- **Agendamento Real:**
  - Seleção de dia e horário dinâmico.
  - Validação para impedir agendamentos em datas passadas.
  - Bloqueio de horários já reservados.
- **Gestão de Reservas:**
  - Dashboard para o usuário visualizar agendamentos confirmados e finalizados.
  - Opção de cancelamento de reserva.
- **Feedback Visual:** Uso de Toasts (Sonner) para confirmar ações (sucesso/erro).
- **Design Responsivo:** Layout adaptado para mobile, tablets e desktops (incluindo carrossel e menu lateral).

## 🗄️ Modelagem de Dados (Database)

O banco de dados relacional foi estruturado para suportar a integridade dos agendamentos:

- **User:** Gerenciado via NextAuth/Google.
- **Barbershop:** Contém dados do estabelecimento (Nome, Endereço, Imagem, Telefones).
- **BarbershopService:** Serviços vinculados a uma barbearia (Corte, Barba, Preço).
- **Booking:** Tabela pivô que conecta Usuário, Serviço e Data/Hora.

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- Conta no [Neon DB](https://neon.tech/) ou Docker para rodar o PostgreSQL.
- Credenciais do Google Cloud Console (OAuth Client ID e Secret).

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/trimmr.git](https://github.com/seu-usuario/trimmr.git)
   cd trimmr
