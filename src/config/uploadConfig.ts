export const uploadConfig = {
  // Tipos de arquivo aceitos
  acceptedFileTypes: [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/webp',
    'application/pdf'
  ],
  
  // Extensões aceitas
  acceptedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.pdf'],
  
  // Tamanho máximo do arquivo (10MB)
  maxFileSize: 10 * 1024 * 1024,
  
  // Dimensões mínimas da imagem
  minImageDimensions: {
    width: 800,
    height: 600
  },
  
  // Qualidade mínima da imagem
  minImageQuality: 0.7,
  
  // Formatos de saída suportados
  outputFormats: ['jpg', 'png', 'pdf'],
  
  // Configurações de compressão
  compression: {
    quality: 0.8,
    maxWidth: 1920,
    maxHeight: 1080
  },
  
  // Configurações de OCR (reconhecimento de texto)
  ocr: {
    enabled: true,
    languages: ['pt-BR', 'en'],
    confidence: 0.8
  },
  
  // Configurações de processamento
  processing: {
    autoRotate: true,
    enhanceText: true,
    removeNoise: true,
    sharpenText: true
  },
  
  // Validações específicas para redações
  essayValidation: {
    minWords: 30,
    maxWords: 1000,
    requiredElements: ['introdução', 'desenvolvimento', 'conclusão'],
    forbiddenWords: [], // Palavras proibidas se necessário
    plagiarismCheck: true
  },
  
  // Configurações de armazenamento
  storage: {
    provider: 'local', // ou 's3', 'gcs', etc.
    path: '/uploads/essays/',
    backup: true,
    retention: 30 * 24 * 60 * 60 * 1000 // 30 dias em ms
  },
  
  // Configurações de segurança
  security: {
    virusScan: true,
    contentValidation: true,
    maxFilesPerUser: 10,
    rateLimit: {
      maxUploads: 5,
      timeWindow: 60 * 1000 // 1 minuto
    }
  },
  
  // Mensagens de erro
  errorMessages: {
    fileTooLarge: 'O arquivo é muito grande. Máximo permitido: 10MB',
    invalidFileType: 'Tipo de arquivo não suportado. Use JPG, PNG ou PDF',
    imageTooSmall: 'A imagem é muito pequena. Mínimo: 800x600 pixels',
    poorQuality: 'A qualidade da imagem é muito baixa para análise',
    processingError: 'Erro ao processar a imagem. Tente novamente',
    ocrFailed: 'Não foi possível ler o texto da imagem. Tente uma foto mais clara'
  },
  
  // Dicas para melhor upload
  uploadTips: [
    'Tire a foto em um local bem iluminado',
    'Mantenha a câmera estável e paralela ao papel',
    'Evite sombras e reflexos na imagem',
    'Certifique-se de que todo o texto está visível',
    'Use resolução de pelo menos 800x600 pixels',
    'Salve em formato JPG ou PNG para melhor qualidade'
  ]
};

export default uploadConfig;
