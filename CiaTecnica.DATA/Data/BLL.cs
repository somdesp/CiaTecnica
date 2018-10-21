using CiaTecnica.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CiaTecnica.Data
{
    public class BLL
    {
        private Contexto contexto;

        #region Adiconar Pessoa Fisica
        public bool AdicionarFisica(PessoaFisica cad)
        {

            var strQuery = "";
            strQuery += "INSERT INTO PessoaFisica (Nome,Sobrenome,CPF,CEP,Logradouro,Número,DataNasci,Bairro,Cidade,UF,Complemento,DataCad) ";
            strQuery += string.Format("VALUES('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}')",
                cad.Nome, cad.Sobrenome, cad.CPF, cad.CEP, cad.Logradouro,cad.Numero, cad.DtNasc.ToString("dd/MM/yyyy"), cad.Bairro, cad.Cidade, cad.UF,cad.Complemento, DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss"));

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }

        }
        #endregion

        #region Adiconar Pessoa Juridica
        public bool AdicionarJuridica(PessoaJuridica cad)
        {

            var strQuery = "";
            strQuery += "INSERT INTO PessoaJuridica (NomeFantasia,RazaoSocial,CNPJ,CEP,Logradouro,Número,Bairro,Cidade,UF,Complemento,DataCad) ";
            strQuery += string.Format("VALUES('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}')",
                cad.NomeFantasia, cad.RazaoSocial, cad.CNPJ, cad.CEP, cad.Logradouro, cad.Numero,cad.Bairro, cad.Cidade, cad.UF, cad.Complemento, DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss"));

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }

        }
        #endregion

        #region Lista PessoasFisica
        public List<PessoaFisica> ListarPessoaFisica()
        {
            var Fisica = new List<PessoaFisica>();
            SqlDataReader reader;

            using (contexto = new Contexto())
            {
                var strQuery = "SELECT * FROM PessoaFisica ";
                reader = contexto.ExecutaComandoComRetorno(strQuery);

                while (reader.Read())
                {

                    PessoaFisica temObjeto = new PessoaFisica();
                    temObjeto.Id = Convert.ToInt16(reader["Id"].ToString());
                    temObjeto.Nome = reader["Nome"].ToString();
                    temObjeto.Sobrenome = reader["Sobrenome"].ToString();
                    temObjeto.CPF = reader["CPF"].ToString();
                    temObjeto.CEP = reader["CEP"].ToString();
                    temObjeto.DtNasc = Convert.ToDateTime(reader["DataNasci"].ToString());
                    temObjeto.Cidade = reader["Cidade"].ToString();
                    temObjeto.UF = reader["UF"].ToString();
                    temObjeto.Bairro = reader["Bairro"].ToString();
                    temObjeto.Complemento = reader["Complemento"].ToString();
                    temObjeto.Logradouro = reader["Logradouro"].ToString();
                    temObjeto.Numero = reader["Número"].ToString();


                    Fisica.Add(temObjeto);
                }
            }
            reader.Close();
            return (Fisica);

        }
        #endregion

        #region Atualiza PessoaFisica
        public bool AtualizarPessoaFisica(PessoaFisica pessoa)
        {
            var strQuery = "";
            strQuery += " UPDATE PessoaFisica SET ";
            strQuery += string.Format(" Nome = '{0}', ", pessoa.Nome);
            strQuery += string.Format(" Sobrenome = '{0}', ", pessoa.Sobrenome);
            strQuery += string.Format(" DataNasci = '{0}', ", pessoa.DtNasc);
            strQuery += string.Format(" Bairro = '{0}', ", pessoa.Bairro);
            strQuery += string.Format(" CEP = '{0}', ", pessoa.CEP);
            strQuery += string.Format(" CPF = '{0}', ", pessoa.CPF);
            strQuery += string.Format(" DataCad = '{0}' ,", DateTime.Now.ToString());
            strQuery += string.Format(" Cidade = '{0}', ", pessoa.Cidade);
            strQuery += string.Format(" Complemento= '{0}', ", pessoa.Complemento);
            strQuery += string.Format(" Logradouro='{0}', ", pessoa.Logradouro);
            strQuery += string.Format(" Número= '{0}', ", pessoa.Numero);
            strQuery += string.Format(" UF= '{0}' ", pessoa.UF);
            strQuery += string.Format(" WHERE Id = {0}; ", pessoa.Id);

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }
        }
        #endregion

        #region Excluir PessoaFisica
        public bool ExcluirPessoaFisica(PessoaFisica pessoa)
        {
            var strQuery = "";
            strQuery += " DELETE FROM PessoaFisica ";
            strQuery += string.Format(" WHERE Id = {0}; ", pessoa.Id);

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }
        }
        #endregion

        #region Lista PessoasJuridica
        public List<PessoaJuridica> ListarPessoaJuridica()
        {
            var Fisica = new List<PessoaJuridica>();
            SqlDataReader reader;

            using (contexto = new Contexto())
            {
                var strQuery = "SELECT * FROM PessoaJuridica ";
                reader = contexto.ExecutaComandoComRetorno(strQuery);

                while (reader.Read())
                {

                    PessoaJuridica temObjeto = new PessoaJuridica();
                    temObjeto.Id = Convert.ToInt16(reader["Id"].ToString());
                    temObjeto.NomeFantasia = reader["NomeFantasia"].ToString();
                    temObjeto.RazaoSocial = reader["RazaoSocial"].ToString();
                    temObjeto.CNPJ = reader["CNPJ"].ToString();
                    temObjeto.CEP = reader["CEP"].ToString();
                    temObjeto.Cidade = reader["Cidade"].ToString();
                    temObjeto.UF = reader["UF"].ToString();
                    temObjeto.Bairro = reader["Bairro"].ToString();
                    temObjeto.Complemento = reader["Complemento"].ToString();
                    temObjeto.Logradouro = reader["Logradouro"].ToString();
                    temObjeto.Numero = reader["Número"].ToString();


                    Fisica.Add(temObjeto);
                }
            }
            reader.Close();
            return (Fisica);

        }
        #endregion

        #region Atualiza PessoaJuridica
        public bool AtualizarPessoaJuridica(PessoaJuridica pessoa)
        {
            var strQuery = "";
            strQuery += " UPDATE PessoaJuridica SET ";
            strQuery += string.Format(" NomeFantasia = '{0}', ", pessoa.NomeFantasia);
            strQuery += string.Format(" RazaoSocial = '{0}', ", pessoa.RazaoSocial);
            strQuery += string.Format(" Bairro = '{0}', ", pessoa.Bairro);
            strQuery += string.Format(" CEP = '{0}', ", pessoa.CEP);
            strQuery += string.Format(" CNPJ = '{0}', ", pessoa.CNPJ);
            strQuery += string.Format(" DataCad = '{0}' ,", DateTime.Now.ToString());
            strQuery += string.Format(" Cidade = '{0}', ", pessoa.Cidade);
            strQuery += string.Format(" Complemento= '{0}', ", pessoa.Complemento);
            strQuery += string.Format(" Logradouro='{0}', ", pessoa.Logradouro);
            strQuery += string.Format(" Número= '{0}', ", pessoa.Numero);
            strQuery += string.Format(" UF= '{0}' ", pessoa.UF);
            strQuery += string.Format(" WHERE Id = {0}; ", pessoa.Id);

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }
        }
        #endregion

        #region Excluir PessoaJuridica
        public bool ExcluirPessoaJuridica(PessoaJuridica pessoa)
        {
            var strQuery = "";
            strQuery += " DELETE FROM PessoaJuridica ";
            strQuery += string.Format(" WHERE Id = {0}; ", pessoa.Id);

            using (contexto = new Contexto())
            {
                return contexto.ExecutarInsert(strQuery);
            }
        }
        #endregion

    }
}

