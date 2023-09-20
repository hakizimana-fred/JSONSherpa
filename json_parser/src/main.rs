use std::fs;

fn main() {
    let invalid_json_path = "valid.json";

    let json_content = match fs::read_to_string(invalid_json_path) {
        Ok(content) => content,
        Err(e) => {
            eprintln!("Error reading the file: {}", e);
            return;
        }
    };

    let parsed_result = serde_json::from_str::<serde_json::Value>(&json_content);

    if parsed_result.is_ok() {
        println!("Valid JSON")
    } else {
        println!("Invalid JSON");
    }
}
