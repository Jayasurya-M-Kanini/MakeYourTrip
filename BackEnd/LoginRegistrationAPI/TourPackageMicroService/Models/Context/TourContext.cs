using Microsoft.EntityFrameworkCore;
using TourPackageMicroService.Models;

namespace TourPackageMicroservice.Models.Context
{
    public class TourContext : DbContext
    {



        public TourContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<TourDetails> TourDetails { get; set; }
        public DbSet<Destination> Destinations { get; set; }
        public DbSet<TourDestination> TourDestinations { get; set; }
        public DbSet<TourInclusion> TourInclusions { get; set; }
        public DbSet<TourExclusion> TourExclusions { get; set; }
        public DbSet<Exclusions> Exclusions { get; set; }
        public DbSet<Inclusions> Inclusions { get; set; }
        public DbSet<PickupPoint> PickupPoints { get; set; }
        public DbSet<Itinerary> Itineraries { get; set; }

        public DbSet<DailySchedule> DailySchedules { get; set; }







    }
}
