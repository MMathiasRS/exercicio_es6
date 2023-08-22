const alunos = [
  { nome: "João", nota: 0.5 },
  { nome: "Maria", nota: 9.2 },
  { nome: "Pedro", nota: 7.8 },
  { nome: "Ana", nota: 6.5 },
  { nome: "Carlos", nota: 5.9 },
  { nome: "Mariana", nota: 3.0 },
  { nome: "Rafael", nota: 7.3 },
  { nome: "Lúcia", nota: 5.7 },
  { nome: "Gabriel", nota: 6.8 },
  { nome: "Laura", nota: 2.0 },
];

function MediaDosAlunos() {
  alunos.forEach(alunosItem => {
    if (alunosItem.nota >= 6) {
      console.log(alunosItem.nome);
    }
  });
}

MediaDosAlunos();
