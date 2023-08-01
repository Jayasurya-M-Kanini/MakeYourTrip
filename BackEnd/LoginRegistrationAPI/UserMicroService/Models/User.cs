using System.ComponentModel.DataAnnotations;

namespace UserMicroService.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        //[Key]
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string EmailId { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordKey { get; set; }

        [MaxLength(8, ErrorMessage = "Role Should be either Admin or Employee")]
        public string? Role { get; set; }
    }
}
