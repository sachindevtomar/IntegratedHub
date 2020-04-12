using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratedHub.Models
{
    public class Feature
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool State { get; set; }
    }
}
