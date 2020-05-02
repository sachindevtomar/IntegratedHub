using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratedHub.Models
{
    public class Course
    {
        public int id { get; set; }
        public string courseName { get; set; }
        public string courseDescription { get; set; }
        public string courseDetailsPageLink { get; set; }
        public List<string> tags { get; set; }
        public int duration { get; set; }
    }
}
