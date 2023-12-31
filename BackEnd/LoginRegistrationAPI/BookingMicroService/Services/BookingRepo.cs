﻿using BookingMicroService.Interfaces;
using BookingMicroService.Models;
using Microsoft.EntityFrameworkCore;

namespace BookingMicroService.Services
{
    public class BookingRepo : IBaseCRUD<int, Booking>
    {
        private BookingContext _context;
        private readonly ILogger<BookingRepo> _logger;

        public BookingRepo(BookingContext context, ILogger<BookingRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Booking?> Add(Booking item)
        {
            try
            {
                await _context.Bookings.AddAsync(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<Booking?> Delete(Booking item)
        {
            try
            {
                var booking = await Get(item.BookingId);
                if (booking != null)
                {
                    _context.Bookings.Remove(booking);
                    await _context.SaveChangesAsync();
                    return booking;
                }

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<Booking?> Get(int key)
        {
            try
            {
                return await _context.Bookings.Include(b => b.Passengers).FirstOrDefaultAsync(u => u.BookingId == key);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<List<Booking>?> GetAll()
        {
            try
            {
                return await _context.Bookings.Include(b => b.Passengers).Include(b=>b.Payments).ToListAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<Booking?> Update(Booking item)
        {
            try
            {
                _context.Bookings.Update(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }
    }
}
