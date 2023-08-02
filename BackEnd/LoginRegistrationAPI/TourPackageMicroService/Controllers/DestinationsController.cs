using Microsoft.AspNetCore.Mvc;
using TourPackageMicroservice.Models;
using TourPackageMicroservice.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using TourPackageMicroservice.Exceptions;
using System;
using TourPackageMicroService.Interfaces;

namespace TourPackageMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinationsController : ControllerBase
    {
        private readonly IManageDestination _destinationsRepository;

        public DestinationsController(IManageDestination destinationsRepository)
        {
            _destinationsRepository = destinationsRepository;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<Destination>>> GetAllDestinations()
        {
            try
            {
                var destinations = await _destinationsRepository.GetAllDestination();
                return Ok(destinations);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while retrieving destinations.");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destination>> GetDestinationById(int id)
        {
            try
            {
                var destination = await _destinationsRepository.GetDestination(id);
                if (destination == null)
                {
                    return NotFound();
                }

                return Ok(destination);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while retrieving destination.");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Destination>> AddDestination(Destination destination)
        {
            try
            {
                var addedDestination = await _destinationsRepository.AddDestination(destination);
                if (addedDestination != null)
                {
                    return Ok(addedDestination);
                }
                return BadRequest("Cannot add destination now");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while adding destination.");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Destination>> UpdateDestination(Destination destination)
        {
            try
            {
                

                var existingDestination = await _destinationsRepository.GetDestination(destination.DestinationId);
                if (existingDestination == null)
                {
                    return NotFound();
                }

                var updatedDestination = await _destinationsRepository.UpdateDestination(destination);
                return Ok(updatedDestination);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while updating destination.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Destination>> DeleteDestination(int id)
        {
            try
            {
                var result = await _destinationsRepository.DeleteDestination(id);
                if (result == null)
                {
                    return NotFound();
                }

                return result;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error while deleting destination.");
            }
        }
    }
}
