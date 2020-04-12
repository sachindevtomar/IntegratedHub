using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntegratedHub.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IntegratedHub.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FeatureController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<FeatureController> _logger;

        public FeatureController(ILogger<FeatureController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Feature> Get()
        {
            var featuresList = this.PopulateFeatures();
            if (featuresList != null)
                return featuresList;
            return null;
        }

        public IEnumerable<Feature> PopulateFeatures() {
            var features = new List<Feature>()
            {
                new Feature
                {
                    Name = "Show Home page 1",
                    Description = "When it is enabled user can see Home page 2",
                    CreatedDate = new DateTime(2017, 1, 18),
                    UpdatedDate = new DateTime(2019, 7, 22),
                    State = true
                },
                new Feature
                {
                    Name = "Show Home page 2",
                    Description = "When it is enabled user can see Home page 2",
                    CreatedDate = new DateTime(2012, 4, 13),
                    UpdatedDate = new DateTime(2019, 5, 23),
                    State = true
                },
                new Feature
                {
                    Name = "Show Home page 3",
                    Description = "When it is enabled user can see Home page 3",
                    CreatedDate = new DateTime(2017, 1, 18),
                    UpdatedDate = new DateTime(2019, 5, 23),
                    State = true
                },
                new Feature
                {
                    Name = "Show Home page 4",
                    Description = "When it is enabled user can see Home page 4",
                    CreatedDate = new DateTime(2018, 10, 10),
                    UpdatedDate = new DateTime(2020, 1, 05),
                    State = true
                },
                new Feature
                {
                    Name = "Show Home page 4",
                    Description = "When it is enabled user can see Home page 4",
                    CreatedDate = new DateTime(2016, 3, 16),
                    UpdatedDate = new DateTime(2019, 4, 14),
                    State = true
                }
            };
            return features;
        }
    }
}
