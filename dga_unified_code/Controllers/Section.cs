using Microsoft.AspNetCore.Mvc;

namespace dga_unified_code.Controllers
{
    public class Section : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
