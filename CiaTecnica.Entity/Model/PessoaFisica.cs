using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace CiaTecnica.Entity
{
    public class PessoaFisica
    {
        public int Id { get; set; }

        [Required]
        public string CPF { get; set; }
        public DateTime DtNasc { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string CEP { get; set; }
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string UF { get; set; }

        public string Complemento { get; set; }
    }
}