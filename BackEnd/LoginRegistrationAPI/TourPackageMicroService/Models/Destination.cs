using System.ComponentModel.DataAnnotations;

public class Destination
{
    [Key]
    public int DestinationId { get; set; }

    [Required]
    public string? DestinationCityName { get; set; }

    [Required]
    public string? Country { get; set; }

    public ICollection<TourDestination>? TourDestinations { get; set; }


}
