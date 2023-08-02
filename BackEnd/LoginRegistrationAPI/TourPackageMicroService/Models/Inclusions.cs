using System.ComponentModel.DataAnnotations;

namespace TourPackageMicroservice.Models
{
    public class Inclusions
    {

        [Key]
        public int InclusionId { get; set; }
        [Required]
        public string? InclusionDescription { get; set; }

        public ICollection<TourInclusion>? TourInclusion { get; set; }

    }
}
