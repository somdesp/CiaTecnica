using CiaTecnica.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CiaTecnica.Data;

namespace CiaTecnica.Controllers
{
    public class CadastroPessoaController : Controller
    {
        #region CadastroPessoa Fisica
        public JsonResult CadastrarFisica(PessoaFisica pessoa)
        {
            BLL pessoaBll = new BLL();
            if (pessoaBll.AdicionarFisica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion

        #region Cadastro Pessoa Juridica
        public JsonResult CadastrarJuridica(PessoaJuridica pessoa)
        {
            BLL pessoaBll = new BLL();
            if (pessoaBll.AdicionarJuridica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion

        #region Metodo listar Usuario READ   

        public JsonResult ListarFisica()
        {
            BLL usuarioBll = new BLL();

            return Json(usuarioBll.ListarPessoaFisica(), JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Metodo Editar Pessoa Fisica   
        
        [HttpPost]
        public JsonResult AtualizarFisica(PessoaFisica pessoa)
        {
            BLL fisicaBll = new BLL();
            if (fisicaBll.AtualizarPessoaFisica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion

        #region Metodo Excluir Pessoa Fisica   
        
        [HttpPost]
        public JsonResult ExcluirFisica(PessoaFisica pessoa)
        {
            BLL fisicaBll = new BLL();
            if (fisicaBll.ExcluirPessoaFisica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion

        #region Metodo ListarJuridica 

        public JsonResult ListarJuridica()
        {
            BLL fisicaBll = new BLL();

            return Json(fisicaBll.ListarPessoaJuridica(), JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Metodo Editar Pessoa Juridica    
       
        [HttpPost]
        public JsonResult AtualizarJuridica(PessoaJuridica pessoa)
        {
            BLL fisicaBll = new BLL();
            if (fisicaBll.AtualizarPessoaJuridica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion

        #region Metodo Excluir Pessoa Juridica  
      
        [HttpPost]
        public JsonResult ExcluirJuridica(PessoaJuridica pessoa)
        {
            BLL fisicaBll = new BLL();
            if (fisicaBll.ExcluirPessoaJuridica(pessoa) == true)
            {
                return Json(new { success = true });
            }
            return Json(new { success = false });
        }
        #endregion
    }
}
