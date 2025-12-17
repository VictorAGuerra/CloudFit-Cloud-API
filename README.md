# CloudFit – Arquitetura Cloud-Native

Este repositório apresenta a solução da empresa fictícia **CloudFit**, desenvolvida como uma API simples seguindo princípios de arquitetura nativa na nuvem. O projeto demonstra o uso integrado de Infraestrutura como Código, containerização, orquestração com Kubernetes e automação por meio de CI/CD.

A solução foi construída com foco acadêmico, visando demonstrar domínio conceitual e técnico das tecnologias utilizadas, sem a necessidade de provisionamento real na AWS.

---

## Visão Geral da Arquitetura

A arquitetura proposta segue o modelo cloud-native, contemplando os seguintes componentes:

- API REST stateless desenvolvida em Node.js
- Containerização da aplicação com Docker
- Orquestração dos containers com Kubernetes (Amazon EKS)
- Infraestrutura definida como código utilizando Terraform
- Pipeline de CI/CD com GitHub Actions

O fluxo da solução inicia no versionamento do código em um repositório Git, que dispara automaticamente o pipeline de CI/CD. O pipeline é responsável por construir a aplicação, gerar a imagem Docker e preparar o deploy no Kubernetes. A infraestrutura necessária para suportar a aplicação é descrita de forma declarativa com Terraform, garantindo reprodutibilidade e padronização.

---

## Estrutura do Repositório

```text
.
├── cloudfit-api/
│   ├── app/
│   │   ├── index.js
│   │   └── routes.js
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── package-lock.json
├── infra/
│   └── terraform/
│       ├── provider.tf
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── .github/
    └── workflows/
        └── ci-cd.yaml
