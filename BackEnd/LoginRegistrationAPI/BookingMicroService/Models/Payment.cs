using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BookingMicroService.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        public DateTime PaymentDay { get; set; }
        public float PaymentAmount { get; set; }
        public float? DiscountAmount { get; set; }
        public float? WalletAmount { get; set; }
        public float NetPayableAmount { get; set; }
        public string? PaymentStatus { get; set; }

        public int BookingId { get; set; }
        [ForeignKey("BookingId")]
        [JsonIgnore]
        public Booking? Booking { get; set; }
    }
}
