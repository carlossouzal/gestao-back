import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class FileSizeValidationPipe implements PipeTransform{
  transform(value: any, metadata: ArgumentMetadata) {
    const limit = process.env.MAX_FILE_SIZE;
    return value.size < limit;
  }
}