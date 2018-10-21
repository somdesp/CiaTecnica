CiaTecnica.controller('pessoaFisica', function ($scope, cadastroService) {

    ListarFisica();
    //Cadastrar PessoaFisica
    $scope.cadastrarFisica = function () {

        var PessoaFisica = {
            Nome: $scope.nome,
            CPF: $scope.cpf,
            Sobrenome: $scope.sobrenome,
            CEP: $scope.cep,
            DtNasc: $scope.dataNasci,
            Logradouro: $scope.logradouro,
            Numero: $scope.numero,
            Bairro: $scope.bairro,
            Cidade: $scope.cidade,
            UF: $scope.uf,
            Complemento: $scope.complemento
        }

        if (IdadeMax(PessoaFisica.DtNasc) < 19) {
            alert("Idade Precisa ser maior que 19");
            return;
        };

        if (ValidaCpf(PessoaFisica.CPF) == false) {
            alert("CPF Incorreto");
        } else {
            var adicionaFisica = cadastroService.adicionarFisica(PessoaFisica);

            adicionaFisica.then(function (d) {
                if (d.data.success === true) {
                    alert("Pessoa Fisica Cadastrado");
                    limpaCampos();
                } else {
                    alert("Pessoa Fisica nao Cadastrado");
                }
            },
                function () {
                    alert("Erro ao cadastrar");
                });
        }
    }

    //Listar Fisica
    function ListarFisica() {
        var listarUsuarios = cadastroService.getTodosUsuarios();
        listarUsuarios.then(function (d) {
            for (var i = 0; i < d.data.length; i++) {
                d.data[i].DtNasc = new Date(converteDataHora(d.data[i].DtNasc ));
                }
                $scope.FisicaLista = d.data;
            },
            function () {
                console.log("Erro ao carregar a lista de usuario");
            });
    }

    //Função chamada quando carrega a modal do editar.
    $scope.carregarPessoaFisicaID = function (pessoa) {
        $scope.id = pessoa.Id;
        $scope.nome = pessoa.Nome;
        $scope.cpf = pessoa.CPF;
        $scope.sobrenome = pessoa.Sobrenome;
        $scope.cep = pessoa.CEP;
        $scope.dataNasci = pessoa.DtNasc;
        $scope.logradouro = pessoa.Logradouro;
        $scope.numero = pessoa.Numero;
        $scope.bairro = pessoa.Bairro;
        $scope.cidade = pessoa.Cidade;
        $scope.uf = pessoa.UF;
        $scope.complemento = pessoa.Complemento;
    }

    //Atualizar Fisica
    $scope.atualizarFisica = function () {
        var PessoaFisica = {
            Id: $scope.id ,
            Nome: $scope.nome,
            CPF: $scope.cpf,
            Sobrenome: $scope.sobrenome,
            CEP: $scope.cep,
            DtNasc: $scope.dataNasci,
            Logradouro: $scope.logradouro,
            Numero: $scope.numero,
            Bairro: $scope.bairro,
            Cidade: $scope.cidade,
            UF: $scope.uf,
            Complemento: $scope.complemento
        }

        if (IdadeMax(PessoaFisica.DtNasc) < 19) {
            alert("Idade Precisa ser maior que 19");
            return;
        };

        if (ValidaCpf(PessoaFisica.CPF) == false) {
            alert("CPF Incorreto");
        } else {
            var atualizarFisica = cadastroService.atualizarFisica(PessoaFisica);

            atualizarFisica.then(function (d) {
                    if (d.data.success === true) {
                        alert("Pessoa Fisica Atualizada");
                        limpaCampos();
                        $('#AtualizarPessoaFisica').modal('hide');
                        ListarFisica();
                    } else {
                        alert("Pessoa Fisica Não Atualizada");
                    }
                },
                function () {
                    alert("Erro ao Atualizada");
                });
        }
    }

    //Excluir Fisica
    $scope.excluirFisica = function (pessoa) {
        var btnVal = confirm("Deseja Excluir a Pessoa Fisica?");

        if (btnVal === true) {
            var excluirFisica = cadastroService.excluirFisica(pessoa);
            excluirFisica.then(function (d) {
                if (d.data.success === true) {
                        alert("Pessoa Fisica Excluida");
                        limpaCampos();
                        ListarFisica();
                    }

                },
                function () {
                    alert("Erro ao Excluir");
                });
        }
    }
    function IdadeMax(Campo) {
        // A data da entrada...
        var inputDate = new Date(Date.parse(Campo));
        // A data de hoje...
        var today = new Date();

        // Irá retornar um inteiro contendo o número de milissegundos de diferença entre as datas
        var diff = (today - inputDate);
        // 1 ano em milissegundos, contando que existe aproximadamente 1 ano bissexto a cada 4 anos...
        var year = 1000 * 60 * 60 * 24 * 365.25;

        return(Math.floor(diff / year));
    }

    function limpaCampos() {
        $scope.nome = "";
        $scope.cpf = "";
        $scope.sobrenome = "";
        $scope.cep = "";
        $scope.dataNasci = "";
        $scope.logradouro = "";
        $scope.numero = "";
        $scope.bairro = "";
        $scope.cidade = "";
        $scope.cidade = "";
        $scope.complemento = "";
        $scope.uf = "";
    }

    function ValidaCpf(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }

    //correção datas
    function converteDataHora(data) {
        var arrayMes = new Array(12);
        arrayMes[0] = "01";
        arrayMes[1] = "02";
        arrayMes[2] = "03";
        arrayMes[3] = "04";
        arrayMes[4] = "05";
        arrayMes[5] = "06";
        arrayMes[6] = "07";
        arrayMes[7] = "08";
        arrayMes[8] = "09";
        arrayMes[9] = "10";
        arrayMes[10] = "11";
        arrayMes[11] = "12";



        var dataReplace = data.toString().replace(/\/Date\((-?\d+)\)\//, '$1');
        var conversao = new Date(parseInt(dataReplace));
        return conversao.getFullYear() + "-" + arrayMes[conversao.getUTCMonth()] + "-" ;
    }
});