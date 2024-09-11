    const alunos = [ 
        
    {
    nome : 'Matheus',
    nota : 9.5
    },

    {
        nome : 'Francine',
        nota : 6.5
    },

    {
        nome : 'Pingo',
        nota : 3
    }
        ]

    function filtrarAlunosComNotaMaiorOuIgualA6(alunos) {
        
        return alunos.filter(aluno => aluno.nota >= 6);
        }
            
            
    const alunosAprovados = filtrarAlunosComNotaMaiorOuIgualA6(alunos);
    console.log(alunosAprovados);