CiaTecnica.service('cadastroService', function ($http) {


   //Cadastro Pessoa Fisica
    this.adicionarFisica = function (pessoaFisica) {
        var request = $http({
            method: 'post',
            url: '/CadastroPessoa/CadastrarFisica',
            data: pessoaFisica
        });

        return request;
    };

    //Cadastro Pessoa Fisica
    this.adicionarJuridica = function (PessoaJuridica) {
        var request = $http({
            method: 'post',
            url: '/CadastroPessoa/CadastrarJuridica',
            data: PessoaJuridica
        });

        return request;
    };

    //Servico de listar Pessoas Fisica
    this.getTodosUsuarios = function () {
        return $http.get("/CadastroPessoa/ListarFisica");
    };

    // Atualizar Fisica
    this.atualizarFisica = function (pessoaFisica) {
        var request = $http({
            method: 'POST',
            url: '/CadastroPessoa/AtualizarFisica',
            data: pessoaFisica
        });
        return request;
    }

    // Excluir Fisica
    this.excluirFisica = function (pessoaFisica) {
        var request = $http({
            method: 'POST',
            url: '/CadastroPessoa/ExcluirFisica',
            data: pessoaFisica
        });
        return request;
    }

    //Servico de listar Pessoas Juridica
    this.getJuridica = function () {
        return $http.get("/CadastroPessoa/ListarJuridica");
    };

    // Atualizar Juridica
    this.atualizarJuridica = function (pessoaJuridica) {
        var request = $http({
            method: 'POST',
            url: '/CadastroPessoa/AtualizarJuridica',
            data: pessoaJuridica
        });
        return request;
    }

    // Excluir Juridica
    this.excluirJuridica = function (pessoaJuridica) {
        var request = $http({
            method: 'POST',
            url: '/CadastroPessoa/ExcluirJuridica',
            data: pessoaJuridica
        });
        return request;
    }
 
});