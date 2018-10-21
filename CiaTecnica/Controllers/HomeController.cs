using System.Web.Mvc;

namespace CiaTecnica.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult ListaFisica()
        {
            return View();
        }

        public ActionResult ListaJuridica()
        {
            return View();
        }

        public ActionResult PessoaFisica()
        {
            return View();
        }

        public ActionResult PessoaJuridica()
        {
            return View();
        }
    }
}
