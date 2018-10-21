CiaTecnica.controller('pessoaJuridica', function ($scope, cadastroService) {

    ListarJuridica();
    //Cadastrar PessoaJuridica
    $scope.cadastrarJuridica = function () {

        var PessoaJuridica = {
            RazaoSocial: $scope.razaosocial,
            CNPJ: $scope.cnpj,
            NomeFantasia: $scope.nomfantasia,
            CEP: $scope.cep,
            Logradouro: $scope.logradouro,
            Numero: $scope.numero,
            Bairro: $scope.bairro,
            Cidade: $scope.cidade,
            UF: $scope.cidade,
            Complemento: $scope.complemento
        }

        if (validarCNPJ(PessoaJuridica.CNPJ) == false) {
            alert("CNPJ Incorreto");
        } else {
            var adicionaJuridica = cadastroService.adicionarJuridica(PessoaJuridica);

            adicionaJuridica.then(function (d) {
                if (d.data.success === true) {
                    alert("Pessoa Juridica Cadastrado");
                    limpaCampos();
                } else {
                    alert("Pessoa Juridica nao Cadastrado");
                }
            },
                function () {
                    alert("Erro ao cadastrar");
                });
        }
    }

    //Listar Juridica
    function ListarJuridica() {
        var listarJuridica = cadastroService.getJuridica();
        listarJuridica.then(function (d) {
                $scope.JuridicaLista = d.data;
            },
            function () {
                console.log("Erro ao carregar a lista de Pessoas Juridica");
            });
    }

    //Função chamada quando carrega a modal do editar.
    $scope.carregarPessoaJuridicaID = function (pessoa) {
        $scope.id = pessoa.Id;
        $scope.razaosocial = pessoa.RazaoSocial;
        $scope.cnpj = pessoa.CNPJ;
        $scope.nomfantasia = pessoa.NomeFantasia;
        $scope.cep = pessoa.CEP;
        $scope.logradouro = pessoa.Logradouro;
        $scope.numero = pessoa.Numero;
        $scope.bairro = pessoa.Bairro;
        $scope.cidade = pessoa.Cidade;
        $scope.uf = pessoa.UF;
        $scope.complemento = pessoa.Complemento;
    }

    //Atualizar Juridica
    $scope.atualizarJuridica = function () {
        var PessoaJuridica = {
            Id: $scope.id,
            RazaoSocial: $scope.razaosocial,
            CNPJ: $scope.cnpj,
            NomeFantasia: $scope.nomfantasia,
            CEP: $scope.cep,
            Logradouro: $scope.logradouro,
            Numero: $scope.numero,
            Bairro: $scope.bairro,
            Cidade: $scope.cidade,
            UF: $scope.cidade,
            Complemento: $scope.complemento
        }

        if (validarCNPJ(PessoaJuridica.CNPJ) == false) {
            alert("CNPJ Incorreto");
        } else {
            var atualizaJuridica = cadastroService.atualizarJuridica(PessoaJuridica);

            atualizaJuridica.then(function (d) {
                    if (d.data.success === true) {
                        alert("Pessoa Juridica Atualizada");
                        $('#AtualizarPessoaJuridica').modal('hide');
                        limpaCampos();
                        ListarJuridica();
                    } else {
                        alert("Pessoa Juridica nao Atualizada");
                    }
                },
                function () {
                    alert("Erro ao Atualizar");
                });
        }
    }

    //Excluir Juridica
    $scope.excluirJuridica = function (pessoa) {
        var btnVal = confirm("Deseja Excluir a Pessoa Juridica?");

        if (btnVal === true) {
            var excluirJuridica = cadastroService.excluirJuridica(pessoa);
            excluirJuridica.then(function (d) {
                if (d.data.success === true) {
                    alert("Pessoa Juridica Excluida");
                    limpaCampos();
                    ListarJuridica();
                }

            },
                function () {
                    alert("Erro ao Excluir");
                });
        }
    }

    function limpaCampos() {
        $scope.razaosocial = "";
        $scope.cnpj = "";
        $scope.nomfantasia = "";
        $scope.cep = "";
        $scope.logradouro = "";
        $scope.numero = "";
        $scope.bairro = "";
        $scope.cidade = "";
        $scope.cidade = "";
        $scope.complemento = "";
        $scope.uf = "";
    }

  function validarCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    }
});