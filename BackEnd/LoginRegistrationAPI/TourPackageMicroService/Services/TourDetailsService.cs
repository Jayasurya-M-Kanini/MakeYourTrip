using Microsoft.Extensions.Logging;
using TourPackageMicroservice.Interfaces;
using TourPackageMicroservice.Models;
using TourPackageMicroService.Interfaces;

namespace TourPackageMicroService.Services
{
    public class TourDetailsService : IManageTourDetails
    {
        private readonly IRepo<TourDetails,int> _tourDetailsRepo;
        private readonly ILogger<TourDetailsService> _logger;


        public TourDetailsService(IRepo<TourDetails, int> tourDetailsRepo, ILogger<TourDetailsService> logger) {
            _tourDetailsRepo = tourDetailsRepo;
            _logger = logger;

        }
        public async Task<TourDetails?> AddtourDetails(TourDetails tourDetails)
        {
            try
            {
                tourDetails.Availability = "Opened";
                await _tourDetailsRepo.Add(tourDetails);
                return tourDetails;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<TourDetails?> DeletetourDetails(int id)
        {
            try
            {
                var booking = await GettourDetails(id);
                if (booking != null)
                {
                    await _tourDetailsRepo.Delete(id);
                    return booking;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<ICollection<TourDetails>?> GetAlltourDetails()
        {
            try
            {
                var bookings = await _tourDetailsRepo.GetAll();
                if (bookings != null)
                {
                    return bookings;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<TourDetails?> GettourDetails(int id)
        {
            try
            {
                var booking = await _tourDetailsRepo.Get(id);
                if (booking != null)
                {
                    return booking;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<TourDetails?> UpdatetourDetails(TourDetails tours)
        {
            try
            {
                var tourdetails = await _tourDetailsRepo.Get(tours.TourId);
                if (tourdetails != null)
                {
                    tourdetails.TourDescription = string.IsNullOrEmpty(tours.TourDescription) ? tourdetails.TourDescription : tours.TourDescription;
                    tourdetails.Tourtype = string.IsNullOrEmpty(tours.Tourtype) ? tourdetails.Tourtype : tours.Tourtype;
                    tourdetails.DepartureDate = tours.DepartureDate;
                    tourdetails.ReturnDate = tours.ReturnDate;
                    tourdetails.TourPrice = tours.TourPrice == 0 ? tourdetails.TourPrice : tours.TourPrice;
                    tourdetails.MaxCapacity = tours.MaxCapacity == 0 ? tourdetails.MaxCapacity : tours.MaxCapacity;
                    tourdetails.BookedCapacity = tours.BookedCapacity == 0 ? tourdetails.BookedCapacity : tours.BookedCapacity;
                    tourdetails.ImageUrl = string.IsNullOrEmpty(tours.ImageUrl) ? tourdetails.ImageUrl : tours.ImageUrl;
                    tourdetails.CancellationPolicy = string.IsNullOrEmpty(tours.CancellationPolicy) ? tourdetails.CancellationPolicy : tours.CancellationPolicy;
                    tourdetails.AccomodationStatus = string.IsNullOrEmpty(tours.AccomodationStatus) ? tourdetails.AccomodationStatus : tours.AccomodationStatus;
                    tourdetails.BookingRestriction = tours.BookingRestriction==0 ? tourdetails.BookingRestriction : tours.BookingRestriction;
                    tourdetails.HealthAndSafety = string.IsNullOrEmpty(tours.HealthAndSafety) ? tourdetails.HealthAndSafety : tours.HealthAndSafety;
    

                    await _tourDetailsRepo.Update(tourdetails);
                    return tourdetails;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }
    }
}
