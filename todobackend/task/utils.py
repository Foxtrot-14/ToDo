from cryptography.fernet import Fernet

def get_key() -> bytes:
    return b'VkwFDyiHV6mIaqLJOjn0HvaoUEeXCfNJY9zZ8AsdP9s='

def encrypt(data: str) -> bytes:
    key = get_key()
    fernet = Fernet(key)
    encrypted_data = fernet.encrypt(data.encode())
    return encrypted_data

def decrypt(encrypted_data: bytes) -> str:
    key = get_key()
    fernet = Fernet(key)
    try:
        decrypted_data = fernet.decrypt(encrypted_data).decode()
    except Exception as e:
        print(f"Decryption error: {e}")
        return ""
    return decrypted_data

# # Example usage
# if __name__ == "__main__":
#     original_data = "Hello, World!"
#     encrypted = encrypt(original_data)
#     print(f"Encrypted: {encrypted}")

#     decrypted = decrypt(encrypted)
#     print(f"Decrypted: {decrypted}")
